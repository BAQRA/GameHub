import React from 'react'

import Logo from '../../../assets/images/Logo.jpeg'
import classes from './Logo.css'
import {NavLink} from 'react-router-dom'

const logo = (props) => (
    <div className={classes.Logo}>
        <NavLink to={'/'}><img src={Logo} alt='GameHub' /></NavLink>
    </div>
)

export default logo;