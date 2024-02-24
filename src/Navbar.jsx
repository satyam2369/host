import React from 'react'
import './Navbar.css';
import logo from"./logo.png"
import profile from "./profile.png"
import { Link } from 'react-router-dom';

function Navbar(prop) {
  return (
    <div className='navb'>
      <img className='logo' src={logo} alt="" />
      <h3>PlotPlus</h3>
      <a href="#" style={{marginLeft:"11vw"}}> Our Story</a>
      <a href="#category_">Read</a>
      <Link to="/upload"  state={{username:prop.Name}}>Write</Link>
      <Link to='/character' >Upload</Link>
      {
        prop.Name?<p className='user_'>{prop.Name}</p>:
      <Link to='/login' style={{marginLeft:"0px"}}><button class="butt">Sign In</button></Link>
}
      {/* <img className='profile' src={profile} alt="" /> */}
    </div>
  )
}

export default Navbar
