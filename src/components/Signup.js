import React from 'react'
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="background">
      <div className="loginForm_container" id="login_container">
        <form className="loginForm" id="form" method="" action="">
          <h2 className="loginForm_title title">Signup</h2>
            <input className="loginForm__input" type="text" placeholder="Name"/>
            <input className="loginForm__input" type="text" placeholder="Email"/>
            <input className="loginForm__input" type="password" placeholder="Password"/>
            <input className="loginForm__input" type="password" placeholder="Retype Password"/>
            <p class="login_not"> 
              <span class="text">Already a member?</span> 
              <Link to="/login"> <a href="/signup">Login</a></Link> 
            </p>
          <button className="loginForm__button">Submit</button>
        </form>
      </div>
    </div>
  )
}
