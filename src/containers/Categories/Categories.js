import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'

import Aux from '../../hoc/auxx';
import classes from './Categories.css';
import axios from '../../axios/axios';

const Categories = props => {
    const [data, setData] = useState({
        categories: []
    })
    useEffect(() => {
        axios.get('http://localhost:8080/categories')
        .then(categories => {
            setData({categories: categories.data})
        })
    },[]);
    return (
        <Aux> 
            <div>
                <ul className={classes.Categories}>
                    {data.categories.map(category => 
                        <li key={category._id}>
                            <NavLink to={ "/?categoryId=" + category._id}>{category.title}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </Aux>
    )
};

export default Categories;