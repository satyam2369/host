import React from 'react';
import './CategorySection.css';
import {adventure, romance, fantasy, mystery, SciFi, Historical } from './imag';
import { Link } from 'react-router-dom';
import category from './components/category/category';


function CategorySection() {
  return (
    <section className="category-section" id='category_'>
      <h2>Explore Genres</h2>
      <div className="category-list">
        <Link to="/category" state={{ cat:"Adventure",bg:0 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={adventure} alt="Category 1" />
          <p>Adventure</p>
        </div>
        </Link>

        <Link to="/category" state={{ cat:"Romance",bg:1 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={romance} alt="Category 2" />
          <p>Romance</p>
        </div>
        </Link>

        <Link to="/category" state={{ cat:"Fantasy",bg:2 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={fantasy} alt="Category 3" />
          <p>Fantasy</p>
        </div>
        </Link>


        <Link to="/category" state={{ cat:"Mystery",bg:3 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={mystery} alt="Category 3" />
          <p>Mystery</p>
        </div>
        </Link>

        <Link to="/category" state={{ cat:"SciFi",bg:4 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={SciFi} alt="Category 3" />
          <p>Sci-Fi</p>
        </div>
        </Link>
        

        <Link to="/category" state={{ cat:"Historical",bg:5 }}  style={{textDecoration:"none"}}>
        <div className="category">
          <img src={Historical} alt="Category 3" />
          <p>Historical</p>
        </div>
        </Link>

        
      </div>
    </section>
  );
};

export default CategorySection;