import React from "react";
import "../Components/card.css";
import Details from "./list";
import img5 from "../assests/VVIP.png";

const Card = () => {
  return (
    <div className="container">
      <div className="main">
        <h1 className="title-tag">
          <span className="blu">Product features – </span>
          <span className="gree">MVP</span>
          <span className="blu">+ </span>{" "}
          <span className="lightb">Phase 1</span>
        </h1>
        <img src={img5} alt="vvip"></img>

        <div className="mainBox">
          {Details.map((value, index) => {
            return (
              <div>
                <div className="rotate"></div>

                <div key={index} className="cardBox">
                  <div className="card-body">
                    <div className="heading">
                      <div className="image">
                        <img alt="s" src={value.Image}></img>
                      </div>
                      <h4 className="title">{value.tag}</h4>
                      <div className="details">
                        <ul>
                          {" "}
                          {value.items &&
                            value.items.map((val, index) => {
                              return <li key={index}>{val}</li>;
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
