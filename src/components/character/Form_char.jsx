import React, { useState } from 'react'
import './form_char.css'
function Form_char() {
    const [CharName , setName] = useState("");
    const [CharAge , setAge] = useState(0);
    const [CharRole , setRole] = useState("");
    const [CharLikes , setLikes] = useState("");
    const [CharDislike , setDislike] = useState("");
    const [CharFamily , setFamily] = useState("");
    const [CharDreams , setDreams] = useState("");
    const [CharThoughts , setThoughts] = useState("");
    const [Charimage , setimage] = useState();
    function handleForm(event) {
        event.preventDefault();
    
        let formData = new FormData();
        formData.append("CharName", CharName);
        formData.append("CharAge", CharAge);
        formData.append("CharRole", CharRole);
        formData.append("CharLikes", CharLikes);
        formData.append("CharDislike", CharDislike);
        formData.append("CharFamily", CharFamily);
        formData.append("CharDreams", CharDreams);
        formData.append("CharThoughts", CharThoughts);
        formData.append("Charimage", Charimage);
    
        fetch("http://localhost:5000/api/characterUpload", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    
        
      }
    return (
        <div className='Form_char_section'>
            <div className='form_char_inner'>
                <div className='char_head'>
                    <h1 className='char_h1'>Craft a Name , Paint a Story</h1>
                    <input type='text' className='char_title' placeholder='                 Name Your Character' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='Char_div'>
                    <div className='char_left' >
                        <div className='fields' >
                            <label className='char_label'>Age</label>
                            <input type='text' className='char_input' placeholder='Eg-20' onChange={(e) => setAge(e.target.value)}></input>
                        </div>
                        <div className='fields' >
                            <label className='char_label'>Role</label>
                            <input type='text' className='char_input' placeholder='Protagonist / Antagonist...' onChange={(e) => setRole(e.target.value)}></input>
                        </div>
                        <div className='fields' >
                            <label className='char_label'>Likes</label>
                            <textarea type='text' rows={1} cols={20}  className='char_input' placeholder='Reading / Gaming...' onChange={(e) => setLikes(e.target.value)}></textarea>
                        </div>
                        <div className='fields' >
                            <label className='char_label'>Dislike</label>
                            <textarea type='text' rows={1} cols={20}
                            className='char_input'
                            placeholder='Dishonesty / betrayal...' onChange={(e) => setDislike(e.target.value)} ></textarea>
                        </div>
                        <div className='fields' >
                            <label className='char_label'>family</label>
                            <textarea type='text' rows={1} cols={20} className='char_input' placeholder='Parents / Siblings...' onChange={(e) => setFamily(e.target.value)}></textarea>
                        </div>

                    </div>

                    <div className='char_center'> </div>
                    <div className='char_right' >
                        <div className='fields_r' >
                            <label className='char_label_r'>Dreams & Aspirations</label>
                            <textarea type='text' rows={2} cols={25} className='char_input' placeholder='owning a cafe / company...' onChange={(e) => setDreams(e.target.value)}></textarea>
                        </div>
                        <div className='fields_r' >
                            <label className='char_label_r'>Character's Thoughts and Musings </label>
                            <textarea type='text' rows={5} cols={25} className='char_input' placeholder='Anything that you would like to add...'onChange={(e) => setThoughts(e.target.value)}></textarea>
                        </div>

                        <div className='fields_r' >
                            <label className='char_label_r'>Character Image</label>
                            <input type='file' className='char_file'onChange={(e) => setimage(e.target.files[0])}></input>
                        </div>
                    </div>
                
                </div>
                <div className='char_button'>
                <button type='submit' className='char-btn color-blue' onClick={handleForm}>Create Character</button>
                </div>
                
            </div>
        </div>
    )
}

export default Form_char