import React, {useState} from 'react';

import Aux from '../../../hoc/auxx';
import axios from '../../../axios/axios'
import classes from './login.css';
import { Redirect } from 'react-router-dom';

const Login = props => {
    const [redirect, setRedirect] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit  = () => {
        axios.post('http://localhost:8080/login', {
            email: email,
            password: password
        })
        .then(resData => {
            console.log('login successfull');
            localStorage.setItem('token', resData.data.token);
            localStorage.setItem('userId', resData.data.userId);
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
            );
            localStorage.setItem('expiryDate', expiryDate.toISOString());
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('expiryDate');
                localStorage.removeItem('userId');
            }, remainingMilliseconds);
            setRedirect(true);
        })
        .catch(err => {     
            console.log(err, 'login error');
        })
    }
    if(redirect === true){
        return <Redirect to={'/'}/>
    }
    return(
        <Aux>
            <div className={classes.LogForm}>
                <h2>Login to your account</h2>
                <form>
                    <input type="mail" title="mail" onChange={e => setEmail(e.target.value)} placeholder="Mail"/>
                    <input type="password" title="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button type="button" className={classes.btn} onClick={submit}>Login</button>
                    <a className={classes.forgot} href='/login'>Forgot Password?</a>
                </form>
            </div>
        </Aux>
    )
};


export default Login;