import React, { useState } from "react";
import "./post.css";
import { useLocation } from "react-router-dom";

function Post(prop) {
 
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState();
  const [categ, setCateg] = useState("");
  const [anon, setanon] =useState("");
  const [name, setName] = useState("Anonymous")
  function handleForm(event) {
    event.preventDefault();
   
    console.log("hi " + anon);

    let formData = new FormData();
    formData.append("storyTitle", title);
    formData.append("storyText", story);
    formData.append("coverPage", image);
    formData.append("identity", anon);
    formData.append("category", categ);
    formData.append("Username", prop.username);

    fetch("http://localhost:5000/api/storyUpload", {
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

    setTitle("");
    setStory("");
    setImage();
    setCateg("");
    setanon("");
  }

  return (
    <div className="poster">
      <form
        className="poster-child"
        onSubmit={handleForm}
        enctype="multipart/form-data"
      >
        <h3>Give Your Story A Title</h3>
        <input
          required
          className="Input-text"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Once Upon A Time ......."
          cols="50"
          rows="8"
          onChange={(e) => setStory(e.target.value)}
          required
          value={story}
        ></textarea>
        <div className="upload">
          <div>
            <h4>Choose Your Cover Page</h4>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <select id="categ" name="categ" onChange={(e) => setCateg(e.target.value)}  required>
            <option value="">select</option>
            <option value="Adventure">adventure</option>
            <option value="Romance">romance</option>
            <option value="Fantasy">fantasy</option>
            <option value="Mystery">mystery</option>
            <option value="SciFi">SciFi</option>
            <option value="Historical">Historical</option>
          </select>
          <h4 id="anon">Upload Anonmously</h4>
          <div class="toggle">
            <input type="checkbox" onChange={(e) => setanon(e.target.value)}/>
            <label></label>
          </div>
        </div>
        <a className="button third">
          <input className="bt" type="submit" value="SUBMIT"/>
        </a>
      </form>
    </div>
  );
}

export default Post;
