import React, { useContext, useEffect, useState } from "react";
import "./News.css";
import "boxicons/css/boxicons.min.css";
import TokenContext from "../../../Context/TokenContext";
import axios from "axios";

axios.defaults.baseURL = "https://tradekub.me";

export const News = () => {
  const [data, setData] = useState([]);
  const Token = useContext(TokenContext);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    const get_news = async () => {
      await axios
        .get(`/news/`, {
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
    };

    get_news();
  }, [Token.token]);

  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">News</h1>
        {data ? (
          data.map((news) => (
            <div key={news.id} className="news-item">
              <h2 className="news-topic">{news.topic}</h2>
              <p className="news-content">{news.content}</p>
              <p className="news-time">{formatDate(news.news_time)}</p>
            </div>
          ))
        ) : (
          <div>News not found</div>
        )}
        <div className="news-footer"></div>
      </div>
    </div>
  );
};
