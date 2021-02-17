import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import firebase from 'firebase';
import "./Login.css";

function Login() {
    const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // this stops refresh   
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e=> alert(e.message));
    };

    const register = event => {
        event.preventDefault(); 
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(e => alert(e.message));   
    }


    const googleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    history.push('/');
   console.log(result)
  }).catch((error) => {
     console.log(error);
  });
  
 }



  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" required/>
          <h5>Password</h5>
          <input value={password}  onChange={event => setPassword(event.target.value)} type="password" required/>
          <button onClick={login} type="submit" className="login__SignInButton">Sign In</button>
          </form>

          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="">Conditions of Use </a>and <a href="">Privacy Notice.</a>
          </p>

          <p className="text-center mb-1">OR</p>
          <button onClick={googleSignIn} className="googleButton">Sign in with Google</button>
          
          {/* <button onClick={register} className="login__registerButton">Create your Amazon Account</button> */}
      </div>
    </div>
  );
}

export default Login;
