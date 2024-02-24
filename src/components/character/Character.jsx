import React, { useEffect, useState } from "react";
import "./character.css";
import book from "./book.jpg";
import Form_char from "./Form_char";
import Char_card from "./Char_card";


function Character() {
  const [Data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/allCharacter")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
}, []);
console.log(Data);
  return (
    <div className="character_section">
      <div className="char_parent">
        <img className="char_img" src={book} alt="char_img" />
        <h1 className="char_heading">Visual Diaries: Your Image, Your Words</h1>
      </div>
      <Form_char />
      <div className="char_cards_display">
        {typeof Data.length === 0 ? (
          <p>loding</p>
        ) : (
          Data.map((character, i) => (
            <Char_card
                key={parseInt(i)}
                inx={i}
                CharName={character.CharName}
                CharAge={character.CharAge}
                CharRole={character.CharRole}
                CharLikes={character.CharLikes}
                CharDislike={character.CharDislike}
                CharFamily={character.CharFamily}
                CharDreams={character.CharDreams}
                CharThoughts={character.CharThoughts}
                Charimage={character.Charimage}

              />
          ))
        )}
        
      </div>
    </div>
  );
}

export default Character;
