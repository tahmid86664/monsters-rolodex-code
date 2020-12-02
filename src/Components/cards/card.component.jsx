import React from 'react';

import './card.style.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img alt={`monster ${props.monster.id}`} src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
}