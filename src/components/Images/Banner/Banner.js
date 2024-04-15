import React from 'react'

import Banner from '../../../assets/images/Banner.jpeg'
import classes from './Banner.css'

const banner = (props) => (
    <div className={classes.Banner}>
        <img src={Banner} alt='GameHub'/>
    </div>
)

export default banner;