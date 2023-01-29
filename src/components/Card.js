import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Card"/>
      <h3>{props.title}</h3>
      <button>Buy</button>
    </div>
  );
}

export default Card;
