import React from "react";
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  const [isHovered, setHovered] = useState(false);

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8070/StockItems').then(response => {
      setCards(response.data);
    });
  }, []);

  return (
    <CardGroup className="mt-5">
      {cards.map(card => (
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{card.itemName}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        
        <p><span>Cost : </span>{card.cost}</p> 
        <p><span>Price : </span>{card.sellingPrice}</p> 
      </Card.Body>
    </Card>
      
      ))} 
      
    </CardGroup>
  );
}

export default GroupExample;

   