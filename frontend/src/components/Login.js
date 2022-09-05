import React from 'react'
import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div className="background">
      <div className="loginForm_container" id="login_container">
        <form className="loginForm" id="form" method="" action="">
          <h2 className="loginForm_title title">Login</h2>
          <input className="loginForm__input" type="text" placeholder="Email"/>
          <input className="loginForm__input" type="password" placeholder="Password"/>
          <p class="login_not"> 
            <span class="text">Not a member?</span> 
            <Link to="/signup"> <a href="/signup">Sign up</a> </Link> 
          </p>
          <button className="loginForm__button">Submit</button>
        </form>
      </div>
    </div>
  )
}
