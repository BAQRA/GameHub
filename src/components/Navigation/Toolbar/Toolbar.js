import React from 'react'

import classes from './Toolbar.css'
import Logo from '../../Images/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
            <div>search</div>
        </header>
    )
}

export default toolbar;