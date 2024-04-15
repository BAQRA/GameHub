import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import Layout from './components/Layout/Layout';
import Games from './containers/Games/Games';
import Newses from './containers/Newses/Newses';
import Login from './containers/Auth/Login/login';
import Register from './containers/Auth/Register/register'

const app = props => {
  return (
    <div>
      <Layout> 
        <Switch>
          <Route path='/news' component={Newses}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Games}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default app;
