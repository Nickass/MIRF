import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

export default function ({routes}, context) {
    let linksList = [];
    let key = 0;
    for(let name in routes) {
        linksList.push(<li key={key++}><Link to={routes[name]}>{name}</Link></li>)
    }
    return (
        <nav>
            <ul>                
                {linksList}
            </ul>
        </nav>
    );
}