import React from "react";
import "./News.css";
import { Hotnews } from "./DBNews";
import "boxicons/css/boxicons.min.css";

export const News = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
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