import React from 'react'
import boy from './boy.jpg';
import './char_card.css'
function Char_card(prop) {
  return (
    <div className='Char_card_section'>
        <div className='char_card_title'> {prop.CharName}</div>
        <div className='char_card_inner'>
        
            <div className='char_chard_left'>
                <img src={`http://localhost:5000/images/`+prop.Charimage} alt="char_img" className='char_card_img'></img>
            </div>
            <div className='char_chard_right'>
                <div className='char_detail'>
                <p className='char_h3'>Age: </p>
                <p className='char_h4'>  {prop.CharAge}</p>
                <p className='char_h3'>Role: </p>
                <p className='char_h4'>  {prop.CharRole}</p>
                </div>

                <div className='char_detail'>
                    <div className='char_h3_heading'> <p className='char_h3'>Likes: </p> </div>
                    <div className='char_h3_value'><p className='char_h4'>{prop.CharLikes}</p></div>
                </div>

                <div className='char_detail'>
                <div className='char_h3_heading'><p className='char_h3'>Dislikes: </p></div>
                <div className='char_h3_value'><p className='char_h4'>{prop.CharDislike}</p></div>
                </div>

                <div className='char_detail'>
                <div className='char_h3_heading'><p className='char_h3'>Family: </p></div>
                <div className='char_h3_value'><p className='char_h4'> {prop.CharFamily}</p></div>
                </div>

                <div className='char_detail'>
                <div className='char_h3_heading'><p className='char_h3'>Dreams & Aspirations: </p></div>
                <div className='char_h3_value'><p className='char_h4'>  {prop.CharDreams}</p></div>
                </div>
                <div className='char_detail'>
                <div className='char_h3_heading'><p className='char_h3'>Character's Thoughts & Musings: </p></div>
                <div className='char_h3_value'><p className='char_h4'>{prop.CharThoughts}</p></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Char_card