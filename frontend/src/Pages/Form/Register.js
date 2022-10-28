import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";

function Register() {
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/workspace");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/workspace");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
    <div className="Form_Background">
      <div className="Form_container" id="login_container">
        <form className="Form" id="form" onSubmit={(e) => handleSubmit(e)} >
          <div className="Form_icon">
            <Link to="/"><img src={logo} alt="logo" className="Form_icon--img" /></Link>
          </div>
          <h2 className="Form_title form_title">Register Account</h2>
            <input className="Form__input" 
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <input className="Form__input" 
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <p className="Form_not"> 
              <span className="text">Already a member?</span> 
              <Link to="/login"> <a href="/login">Login</a></Link> 
            </p>
          <button className="Form__button">Submit</button>
        </form>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Register;