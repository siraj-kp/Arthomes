//  import React, {useState} from "react";
import React, { useState, useEffect } from "react";
import Card from "./Card";

import { itemList } from "../../assets/js/itemlist";
import { useParams } from "react-router-dom";

const HouseList = () => {
  const cardId = useParams().cardId;
  const [newItem, setNewItem] = useState(itemList);

  useEffect(() => {
    setNewItem(newItem.filter((newItem) => newItem.cardId === cardId));
  }, []);

  console.log(newItem);

  return (
    <div className="about-body">
      {newItem.map((card, index) => (
        <div key={index} className="place-item">
          <Card className="place-item__content">
            <div>
              <img src={card.cardImage} />
            </div>
            <div className="place-item__info">
              <h1>{card.cardTitle}</h1>
              <p>{card.cardDescription}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
