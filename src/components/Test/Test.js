import React from 'react';
import { Link, useParams } from 'react-router-dom';


export const Test = () => {
    const {request} = useParams();
    console.log(useParams());
    return (
        <div>
            <Link to="/" style={{textDecoration: 'underline', color: 'blue'}}>Home</Link>
            <h1>{request}</h1>
        </div>
    )
}