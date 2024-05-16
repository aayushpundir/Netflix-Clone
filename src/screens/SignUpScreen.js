import React, { useRef } from 'react';
import "./SignUpScreen.css";
// import { firebaseApp } from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';

// import db from "../firebase";

function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const authorization = getAuth(firebaseApp);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
          alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='password' type='password'/>
        <button onClick={signIn} type='submit'>Sign In</button>
        <h4>
          <span className='signupScreen_gray'>New to Netfix? </span>
          <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen;  