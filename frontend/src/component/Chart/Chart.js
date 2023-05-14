import React, { useContext, useEffect, useState } from "react";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  convertUnixTimestampToDate,
  convertDateToUnixTimestamp,
  createDate,
} from "../helper/date_helper";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
import { chartConfig } from "../constans/config";
import Chartfilter from "./Chartfilter";
import { getHistoricalData } from "../api/stock_api";
import StockContext from "../context/StockContext";

const Chart = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);
  const [filter, setFillter] = useState("1W");

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        data: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(-years, -months, -weeks, -days, endDate);

      const startUnixTimestamp = convertDateToUnixTimestamp(startDate);
      const endUnixTimestamp = convertDateToUnixTimestamp(endDate);

      return { startUnixTimestamp, endUnixTimestamp };
    };

    const fetchChartData = async () => {
      try {
        const resolution = chartConfig[filter].resolution;
        const { startUnixTimestamp, endUnixTimestamp } = getDateRange();
        const result = await getHistoricalData(
          stockSymbol,
          resolution,
          startUnixTimestamp,
          endUnixTimestamp
        );
        setData(formatData(result));
      } catch (e) {
        setData([]);
        console.log(e);
      }
    };

    fetchChartData();
  }, [stockSymbol, filter]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((key) => {
          return (
            <li key={key}>
              <Chartfilter
                text={key}
                active={filter === key}
                onClick={() => {
                  setFillter(key);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dateMin", "dateMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;