import React from 'react';
import './menu-item.scss';

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`}>
       <div 
       className = "background-image"
       style={{
            backgroundImage: `url(${props.imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title"> {props.title.toUpperCase()} </h1>
            <span className="subtitle"> {props.subtitle} </span>
        </div>
    </div>
);

export default MenuItem;