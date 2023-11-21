import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ name, lon, lat,short, even }) => {
  return (
    <Link to={`/${name}?lat=${lat}&lon=${lon}`} className={`card ${even ? 'darker': ''}`}>
        <div className='card-content-left'>
    <h2>{name.toUpperCase()},{' '}{short}</h2>
    <p>lon: {lon}</p>

    <span>lat: {lat}</span>
        </div>
        <div className='card-content-right'>
    <span className='right-icon'>
    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
    </span>

        </div>

    </Link>
  )
};

export default Card;
