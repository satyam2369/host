import React from "react";
import "./Hero.css";
import vdbg from "./bg2.mp4";
import { Link } from "react-router-dom";
function Hero(prop) {
  return (
    <div className="hero">
      <video className="bg_video" src={vdbg} autoPlay loop muted />
      {/* <img className="bg_video" src={back} alt="background" /> */}
      <h2 className="hero_title">
        "PlotPlus: Weave Your Destiny, Click
        <br />
        by Click, in a Tapestry of Limitless
        <br />
        Imagination"
      </h2>
      <br />
      <br />
      <p className="p1">
        Dive into a world where stories unfold dynamically, whre
        <br />
        your choices shape the plot, and whre te boundries
        <br />
        between reader and protagonist blur.
      </p>
      {/* <button type="button" class="btn btn-info">Info</button> */}
      <div style={{ marginTop: "10vh" }}></div>
      <p className="p2">
        "Compose your story's melody on PlotPlus.Upload now and let your
        imagination shine!"
      </p>
      <Link to="/upload" state={{username:prop.name}}>
        <div href="/Upload" className="feature-link">
          Write Your Story
        </div>
        </Link>
        <Link to="/character">
        <div href="/character" className="feature-link">
          Make Your Character
        </div>
        </Link>
      
    </div>
  );
}

export default Hero;
