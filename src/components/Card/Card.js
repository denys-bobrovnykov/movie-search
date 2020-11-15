import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '../Canvas/Canvas';

import './Card.scss';


export const Card = (props) => {
    
    return (
        <div className="card">
            <div className="card-image">
                <Link to={`/details/${props.category}/${props.itemId}`}>
                    <img src={props.image} alt={props.title} />
                </Link>
            </div>
            <div className="content">
                <div className="circle">
                    <Canvas rating={props.rating}/>
                </div>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}