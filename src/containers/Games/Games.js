import React, {useEffect, useState} from 'react';
import queryString from 'query-string';

import Aux from '../../hoc/auxx';
import classes from './Games.css';
import axios from '../../axios/axios';
import Game from './Game/Game';
import Categories from '../Categories/Categories';
import Pages from '../../components/Pagination/Pages';

const Games = props => {
    const [data, setData] = useState({
        games: [],
        pages: 0
    })
    let { page } = queryString.parse(props.location.search)
    if(!page){
        page = 1
    }
    useEffect(() => {
        const { categoryId } = queryString.parse(props.location.search)
        axios.get('http://localhost:8080/', {
            params: {
                categoryId
            }
        })
        .then(games => {
            setData({games: games.data.data, pages: games.data.pages})
        })
    }, [props]);
    return (
        <Aux>
            <div>
                <div className={classes.Categories}> 
                    <Categories />
                </div>
                <div>
                    <ul className={classes.Games}>
                        {data.games.map(game => <li key={game._id}> <Game {...game}/> </li>)}
                    </ul>
                </div>
            </div>
            <div className={classes.Pages}>
                <Pages>{{pages: data.pages, courentPage: Number(page), onPage: ''}}</Pages>
            </div>
        </Aux>
    )
};

export default Games;