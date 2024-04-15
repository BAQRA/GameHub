import React from 'react'

import classes from './Pages.css'
import { NavLink } from 'react-router-dom'

const Pages = props => {
    const first = props.children.courentPage <= 1 ;
    const second = props.children.courentPage === 2;
    const last = props.children.courentPage >= props.children.pages;
    const nomore1 = props.children.courentPage + 1 >= props.children.pages;
    const nomore2 = props.children.courentPage + 2 >= props.children.pages;
    return (
        <div className={classes.Pages}>
            {first?
            <NavLink to={ props.children.onPage + '/?page=1'}>1</NavLink>:
            null 
            }
            {second ?
            <>
            <NavLink to={props.children.onPage + '/?page=' + (props.children.courentPage - 1)}>{props.children.courentPage - 1}</NavLink>
            <NavLink active activeClassName={classes.active} to={'/?page=' + props.children.courentPage}>{props.children.courentPage}</NavLink>
            </>:
            null
            }
            {nomore1?
            null:
            <NavLink to={props.children.onPage +'/?page=' + (props.children.courentPage + 1)}>{props.children.courentPage + 1}</NavLink>
            }
            {nomore2?
            null:
            <NavLink to={props.children.onPage + '/?page=' + (props.children.courentPage + 2)}>{props.children.courentPage + 2}</NavLink>
            }
            {last?
            null:
            <>
            <NavLink to=''>...</NavLink>
            <NavLink to={props.children.onPage + '/?page=' + props.children.pages}>{props.children.pages}</NavLink> 
            </>}
        </div>
    )
}

export default Pages;