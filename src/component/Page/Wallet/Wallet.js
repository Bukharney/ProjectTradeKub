import React, { useState, useEffect, useRef } from "react";
import "./Wallet.css";
import { Stock, Transaction, Account } from "./DBWallet";
import { Link } from "react-router-dom";
import { value } from "../Navbar/Navbar.js";
import ApexCharts from "apexcharts";

export const Wallet = () => {
  const SortedStock = Stock.wallet.sort((a, b) => {
    return b.marketValue - a.marketValue;
  });

  const [click, setClick] = useState(false);
  const handleClick = () => {
    value.key = 1;
    setClick(!click);
  };

  const TotalWealth = SortedStock.reduce((acc, stock) => {
    return acc + stock.marketValue;
  }, 0);

  const TotalCashBalance = SortedStock.reduce((acc, stock) => {
    return acc + stock.totalcost;
  }, 0);

  const sortedTransactions = Transaction.List.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const palettes = [
    "#00CB76",
    "#AD00FF",
    "#29B1C3",
    "#424CA0",
    "#C0A724",
    "#CD573D",
    "#B9B9B9",
  ];
  const chartRef = useRef(null);
  const colorRef = useRef({});

  useEffect(() => {
    const series = SortedStock.map((stock) =>
      parseFloat(stock.marketValue.toFixed(2))
    );
    const labels = SortedStock.map((stock) => stock.symbol);

    SortedStock.forEach((stock, index) => {
      if (!colorRef.current[stock.symbol]) {
        colorRef.current[stock.symbol] = palettes[index % palettes.length];
      }
    });

    const chartOptions = {
      chart: {
        type: "donut",
      },
      series: series,
      labels: labels,
      colors: SortedStock.map((stock) => colorRef.current[stock.symbol]),
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.7,
          gradientToColors: ["#282A2E", "#000000"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: "120%",
                offsetY: 0.25,
                show: true,
              },
              value: {
                fontSize: "80%",
                color: "#ffffff",
                offsetY: -0.25,
                show: true,
                formatter: function (val) {
                  return val + "THB";
                },
              },
            },
          },
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [SortedStock]);

  return (
    <div>
      <h1>Wallet</h1>
    </div>
  );
};
