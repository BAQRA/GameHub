import React, {useState} from 'react';

import Aux from '../../../hoc/auxx';
import axios from '../../../axios/axios'
import classes from './register.css';
import {Redirect} from 'react-router-dom';

const Register = props => {
    const [redirect, setRedirect] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const submit  = () => {
        axios.post('http://localhost:8080/signup', {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(sigunp => {   
            setRedirect(true);
        })
        .catch(err => {
            return <Redirect to='/errorrr'/>
        })
    }
    if(redirect === true){
        return <Redirect to={'/'}/>
    }
    return(
        <Aux>
            <div className={classes.LogForm}>
                <h2>Register new account</h2>
                <form>
                    <input type="mail" title="mail" onChange={e => setEmail(e.target.value)} placeholder="Mail"/>
                    <input type="password" title="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <input type="password" title="confirmPassword" onChange={e => setconfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    <button type="button" className={classes.btn} onClick={submit}>Register</button>
                </form>
            </div>
        </Aux>
    )
};


export default Register;