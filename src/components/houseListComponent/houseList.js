//  import React, {useState} from "react";
import React, {useState, useEffect} from 'react';

import { itemList } from "../../assets/js/itemlist";
import {useParams} from 'react-router-dom';



const HouseList = () => {
  const cardId = useParams().cardId;
  const [newItem, setNewItem] = useState(itemList);
  
 
  
  


  useEffect(() => {
   console.log(cardId);
  setNewItem(newItem.filter(newItem => newItem.cardId == cardId));
  
  }, []);
  

  console.log(newItem);
  



   return (
    
  <div className="about-body">
{newItem.map((card, index) => ( 
  <div key={index} >
    <h1>{card.cardTitle}</h1>
    
  </div>
 ))} 
</div>



   )
 }






   export default HouseList;
