import React, { useState } from 'react';
import flower from '../assets/char.jpg';
import './cards.css';
import './uploads/1704197910172Screenshot (37).png'
// import uploads1 from '../uploads/1704193202661Screenshot (229).png';
import hi from './uploads/one.jpg'
import two from './uploads/two.jpg'
import three from './uploads/three.jpg'
import four from './uploads/four.jpeg'
import five from './uploads/five.jpg'
import six from './uploads/six.jpg'
import seven from './uploads/seven.jpg'



const images =[hi,two,three,four,five,six,seven]


function Cards(prop) {
  return (
    <div className='cards_section'>
        <div className='cover_page'>
            <img src={`http://localhost:5000/images/`+prop.image} alt={prop.key}></img>
        </div>
        <div className='story_title'>{prop.title}</div>
        <div className='UserName'>{prop.identity?"Anonymous":prop.name }</div>
        <div className='story_des'>{prop.story}</div>

    </div>
  )
}

export default Cards