import React from 'react'
import "./Cards.css"
import {wisper} from './import.js';
import logo from './logo.png'

function Cards(props) {
  const arr =[
    wisper,logo
  ]
  return (
    
    <div className="card">
          <img src={arr[0]} />
          <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.disc}</p>
            <h5>{props.author}</h5>
          </div>
    </div>
    
  )
}

export default Cards
