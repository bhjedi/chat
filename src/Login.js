import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth,provider} from "./firebase";
function Login() {
    const signIn = () =>{
      auth.signInWithPopup(provider).catch((error)=>alert(error.message)) ;   
    };
    return (
        <div className="login"> 
           
          <div className="login__logo">
              <img src="https://img.icons8.com/carbon-copy/2x/chat.png"  alt="" />

          </div>
          <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
