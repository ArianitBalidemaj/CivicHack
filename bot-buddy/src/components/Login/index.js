import "./index.scss";
import React, { Component } from "react";

import userIcon from "../assets/logos/person.png";
import passwordIcon from "../assets/logos/password.png";
import emailIcon from "../assets/logos/email.png";
import { useState } from "react";
import { app, auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [action,setAction] = useState("Login");
    
    const handleSignUpClick = () => {
        window.location.href = "/SignUp";
      };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // console.log(userCredential);
            setShowSuccessModal(true);
            navigate('/Chat');
        })
        .catch((error) => {
            // console.log(error);
        });
    }

    return (
        <div className="container-head">
            <div className="header-head">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={signIn}>
            <div className="Inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={userIcon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                <div className="input">
                    <img src={emailIcon} alt="" />
                    <input type="email" placeholder="Email" value = {email} onChange= {(e)=> setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={passwordIcon} alt="" />
                    <input type="password" placeholder="Password" value = {password} onChange= {(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?  
                <span> Click Here</span> 
                </div>}

            <div className="submit-container">
                <button className={"submit"} onClick={handleSignUpClick}>Sign Up</button>
                <button className={"submit"} onClick={()=>{setAction("Login")}}>{action === "SignUp" ? "Login" : "Sign In"}</button>
            </div>
            </form>
            {showSuccessModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowSuccessModal(false)}>&times;</span>
                        <p>Sign up successful!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;