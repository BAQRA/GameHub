import React from 'react'

import classes from './News.css';

const game = (props) => {
    return (
        <div className={classes.News}>
            <div className={classes.Title}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.Image}>
                <img src = {props.imageUrl} alt='Game'/>
            </div>
            <div className={classes.Description}>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default game;