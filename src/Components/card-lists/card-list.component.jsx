import React from 'react';

import './card-list.style.css';
import {Card} from '../cards/card.component';

export const CardList = (props) => {
    return(
        <div className="card-list">
            {props.monsters.map(monster => 
                <Card monster = {monster} />   
            )}
        </div>
    )
}