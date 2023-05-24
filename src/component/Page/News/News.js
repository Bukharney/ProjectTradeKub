import React, { useContext, useState } from "react";
import "./News.css";
import { Hotnews } from "./DBNews";
import "boxicons/css/boxicons.min.css";
import TokenContext from "../../../Context/TokenContext";
import axios from "axios";

export const News = () => {
  const [data, setData] = useState([]);
  const Token = useContext(TokenContext);
  const get_news = async (e) => {
    console.log(Token.token);
    let res = await axios
      .get(`https://www.tradekub.me/news/`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + Token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    return res;
  };
  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
        <button className="news-button" onClick={get_news}></button>
        {Hotnews.News.map((news) => (
          <div key={news.id} className="news-item">
            <h2 className="news-topic">{news.topic}</h2>
            <p className="news-content">{news.content}</p>
            <p className="news-time">{news.news_time}</p>
          </div>
        ))}
        <div className="news-footer"></div>
      </div>
    </div>
  );
};
