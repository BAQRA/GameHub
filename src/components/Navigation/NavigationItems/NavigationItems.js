import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Games</NavigationItem>
        <NavigationItem link="/news" exact>News</NavigationItem>
        { props.isAuthenticated 
            ? <NavigationItem link ='/logout'>Logout</NavigationItem> 
            :<><NavigationItem link ='/register'>Register</NavigationItem> 
              <NavigationItem link ='/login'>Login</NavigationItem></>}
    </ul>
);

export default navigationItems;