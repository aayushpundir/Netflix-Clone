import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import './LoginScreen.css';

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
        <img 
          className='loginScreen_logo' 
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt='logo' 
        />
        <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>

        <div className='loginScreen_gradient' />

        <div className='loginScreen_body'>
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
            <h1>Unlimited films, TV programes and more.</h1>
            <h2>Watch anywhere, Cancle at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen_input'>
              <form>
                <input type='email' placeholder='Email Address'/>
                <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button>
              </form>
            </div>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}


export default LoginScreen;