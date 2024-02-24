import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import bg from "./write.jpg";
import "./write.css";
import Post from "./post";
import Cards from "./Cards";
import { Link, useLocation } from "react-router-dom";

function Write(prop) {
  //react hook to fetch data from link tag from navbar
  const location = useLocation();

  return (
    <div className="container-write">
      <img className="back" src={bg} alt="" />
      <div className="write-parent">
        <img src={logo} alt="" />
        <h1>Craft Your Story</h1>
      </div>
      <Post username={location.state.username} />
      <div className="write-card">
        {typeof prop.data.length === 0 ? (
          <p>loding</p>
        ) : (
          prop.data.map((story, i) => (
            <Link
              to="/story"
              state={{ title: story.title, dis: story.Story }}
              style={{ textDecoration: "none" }}
            >
              <Cards
                key={parseInt(i)}
                inx={i}
                title={story.title}
                story={story.Story}
                image={story.coverPage}
                identity={story.identity}
                name={story.Username}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Write;
