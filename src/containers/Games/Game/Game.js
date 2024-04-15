import React from 'react'

import classes from './Game.css';

const game = (props) => {
    return (
        <div className={classes.Game}>
            <div className={classes.Title}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.Image}>
                <img src = {props.imageUrl} alt='Game'/>
            </div>
            <div className={classes.Specs}>
                <p>{props.specs}</p>
                <div className={classes.Button}>
                    <a href={props.downloadUrl}>Download</a>
                </div>
            </div>
        </div>
    );
};

export default game;