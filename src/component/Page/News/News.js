import React, { useEffect } from "react";
import "./News.css";
import { Hotnews } from "./DBNews";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import { useState } from "react";

export const News = () => {
  const [data, setData] = useState([]);
  const Token = React.useContext(TokenContext);
  let toke = Token.token;

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("https://www.tradekub.me/news/", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${toke}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getdata();
  }, []);

  return (
    <div className="News">
      <div className="Container_News">
        <div className="Header_News">Hot News</div>

        <div className="News_box_Left">
          <div className="News_box_1">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="Pic__News">
                  <img src={newsItem.Picture1} />
                </div>
                <div className="News_title">
                  <p>{newsItem.Time1}</p>
                  <h2>{newsItem.Title1}</h2>
                </div>
                <div className="New_text">{newsItem.Text1}</div>
              </div>
            ))}
          </div>

          <div className="News_box_2">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time2}</p>
                  <h2>{newsItem.Title2}</h2>
                </div>
                <div className="New_text">{newsItem.Text2}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="News_box_Mid">
          <div className="News_box_1">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="Pic__News">
                  <img src={newsItem.Picture3} />
                </div>
                <div className="News_title">
                  <p>{newsItem.Time3}</p>
                  <h2>{newsItem.Title3}</h2>
                </div>
                <div className="New_text">{newsItem.Text3}</div>
              </div>
            ))}
          </div>

          <div className="News_box_2">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time4}</p>
                  <h2>{newsItem.Title4}</h2>
                </div>
                <div className="New_text">{newsItem.Text4}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="News_box_Right">
          <div className="News_box_1">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="Pic__News">
                  <img src={newsItem.Picture5} />
                </div>
                <div className="News_title">
                  <p>{newsItem.Time5}</p>
                  <h2>{newsItem.Title5}</h2>
                </div>
                <div className="New_text">{newsItem.Text5}</div>
              </div>
            ))}
          </div>

          <div className="News_box_2">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time6}</p>
                  <h2>{newsItem.Title6}</h2>
                </div>
                <div className="New_text">{newsItem.Text6}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
