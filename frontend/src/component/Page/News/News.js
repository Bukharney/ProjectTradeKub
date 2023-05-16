import React from "react";
import "./News.css";
import { Hotnews } from "./DBNews";
import "boxicons/css/boxicons.min.css";

export const News = () => {
  return (
    <div className="News">
      <div className="Container_News">
        <div className="Header_News">
          Hot News
        </div>
        <div className="News_box_Left">
          <div className="News_box_1">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
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

          <div className="News_box_3">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time3}</p>
                  <h2>{newsItem.Title3}</h2>
                </div>
                <div className="New_text">{newsItem.Text3}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="News_box_Mid">
          <div className="News_box_1">
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

          <div className="News_box_2">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time5}</p>
                  <h2>{newsItem.Title5}</h2>
                </div>
                <div className="New_text">{newsItem.Text5}</div>
              </div>
            ))}
          </div>

          <div className="News_box_3">
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

        <div className="News_box_Right">
          <div className="News_box_1">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time7}</p>
                  <h2>{newsItem.Title7}</h2>
                </div>
                <div className="New_text">{newsItem.Text7}</div>
              </div>
            ))}
          </div>

          <div className="News_box_2">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time8}</p>
                  <h2>{newsItem.Title8}</h2>
                </div>
                <div className="New_text">{newsItem.Text8}</div>
              </div>
            ))}
          </div>

          <div className="News_box_3">
            {Hotnews.map((newsItem) => (
              <div className="News_item">
                <div className="News_title">
                  <p>{newsItem.Time9}</p>
                  <h2>{newsItem.Title9}</h2>
                </div>
                <div className="New_text">{newsItem.Text9}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
