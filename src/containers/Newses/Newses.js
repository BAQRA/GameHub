import React, {useEffect, useState} from 'react';
import queryString from 'query-string';

import Aux from '../../hoc/auxx';
import classes from './Newses.css';
import axios from '../../axios/axios';
import News from './News/News';
import Pages from '../../components/Pagination/Pages';

const Newses = props => {  
    const [data, setData] = useState({
        newses: [],
        pages: 0
    })
    let { page } = queryString.parse(props.location.search)
    if(!page){
        page = 1
    }
    useEffect(() => {
        axios.get('http://localhost:8080/news')
            .then(newses => {
                setData({newses: newses.data.data, pages:newses.data.pages})
            })
    }, []);
    return (
        <Aux>
                <div>
                    <ul className={classes.Newses}>
                        {data.newses.map(news => <li key={news._id}> <News {...news}/> </li>)}
                    </ul>
                    <div>
                        <Pages>{{pages: data.pages, courentPage: Number(page), onPage: '/news'}}</Pages>
                    </div>
                </div>
        </Aux>
    )
};

export default Newses;