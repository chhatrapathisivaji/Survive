import React,{ useState } from 'react'
import "./Login.css"
import {Link,useNavigate} from "react-router-dom"
import {auth} from './firebase'
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from 'firebase/auth'
function Login() {
    const navigate= useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=e=>{
        e.preventDefault();
        //some firebase stuff gonna happen now
        signInWithEmailAndPassword(auth,email,password)
        .then(auth => {
            navigate('/')
        })
        .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        //some firebase stuff gonna happen now
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            //Succesfully created new user
            console.log(auth);
            if(auth)
            {
                navigate('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img
           className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG15.png"
           alt=""
           /> 
            </Link>
          <div className="login__container">
              <h1>Sign in</h1>
              <form action="">
                  <h5>E-mail</h5>
                  <input type="text" value={email} 
                  onChange={e=>setEmail(e.target.value)}
                  />
                  <h5>Password</h5>
                  <input type="password"  value={password} 
                  onChange={e=>setPassword(e.target.value)}/>
                  <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
              </form>
              <p>
                  By signing in , you're accepting to the
                    SURVIVE Conditions . Please go through 
                    our Private Notice
              </p>
              <button onClick={register} className="login__registerButton">
                  Create new Account 
              </button>
          </div>
        </div>
    )
}

export default Login
