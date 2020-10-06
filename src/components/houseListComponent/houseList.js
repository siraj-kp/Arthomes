//  import React, {useState} from "react";
import React, { useState, useEffect } from "react";

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
    <div className="house-list row justify-content-center">
      {newItem.map((card, index) => (
        <div key={index} className="card">
          <div>
            <img src={card.cardImage} className="card-img-top" />
          </div>
          <div className="place-item__info">
            <h1>{card.cardTitle}</h1>
            <p>{card.cardDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
