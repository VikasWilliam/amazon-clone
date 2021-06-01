/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
    return (
        <div className="Login">
            <Link to="/">
                <img className="Login_logo"

                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="Login_container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'></input>

                    <h5>Password</h5>
                    <input type='password'></input>

                    <button className='Login_signin'>Sign in</button>


                </form>
                <p>By signing you agree to the conditions
                of use and sale. Please see our privacy policy
                ,our cookies notice and  our intrest-intrest based Ads
                notice.
                   </p>
                <button className='Login_registerButton'>Create and Amazon account</button>
            </div>
        </div>

    )
}

export default Login;