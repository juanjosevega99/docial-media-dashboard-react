import React from "react";
import Card from "./card";
import "./top-card-list.css";

const cardListData = [];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="wrapper">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
