import React from 'react'

import Aux from '../../hoc/auxx';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Banner from '../Images/Banner/Banner';

const toolbar = (props) => {
    return (
        <Aux>
            <Banner/>
            <div className={classes.Toolbar}><Toolbar/></div>
            <div>{props.children}</div>
        </Aux>
    )
}

export default toolbar