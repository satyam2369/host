import React, { useEffect, useState } from 'react'
import google from './assets/google.png';
import facebook from './assets/facebook.png';
import github from './assets/github.png';
import './login.css';
import './signup.css';
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const history = useNavigate()
    const [username , setUsername] =useState("hi");
    const [password, setPassword]=  useState("hi");
    
    async function handleSubmit(event) {
        event.preventDefault();
        const userData ={
            Username:username,
            Password:password
        }
      
        // Create an object with the user credentials
        
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Username:username,
                Password:password
            }),
          }).then(response => response.json())
          .then(data=>{
            // console.log(userData);
            if(data=="exist"){
                console.log("signed");
                history("/", {state:{id:username}})
            }
            else if(data=="notexist"){
                console.log("not sig");
                alert("user is not logged in");
            }
        })
        .catch(e=>{
            console.log(e);
        })
      }
      
  return (
    <div className='login'>
        <h1 className='login_title'>Choose a Login Method</h1>
        <div className='wrapper'>
            <div className='left'>
                <div className='login_button google'>
                    <img src={google} alt="google" className='icons' />
                    Google
                </div>
                <div className='login_button facebook'>
                    <img src={facebook} alt="facebook" className='icons'/>
                    facebook
                </div>
                <div className='login_button github'>
                    <img src={github} alt="github" className='icons' />
                    Github
                </div>
            </div>
            <div className='center'>
                <div className='line'/>
                <div className='or'>OR</div>
            </div>
            <div className='right'>
                <input type='text' className="input_login" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                <input type='password' className="input_login" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='submit-btn color-blue' onClick={handleSubmit}>Submit</button>
                <p> Don't have an account?{' '}
                <Link to="/signup" className="signup-link">
                Join the Adventure!
                </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login