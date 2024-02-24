import { Link } from 'react-router-dom';
import { user_, char, visual, cate } from './import';
import './WhatSetsUsApart.css';

const WhatSetsUsApart = (props) => {
  return (
    <div>
      <h1 className='hh'>What sets us Apart from the Rest</h1>
      <section className="what-sets-us-apart">

        <div className="feature">

          <img src={user_} alt="User-Generated Stories" />
          <h2>User-Generated Stories</h2>
          <p>Fuel your creativity! Anonymously craft and share your interactive stories on our platform. Your voice, your story — join us in the world of PlotPlus Stories!</p>
          <Link to="/upload" state={{username:props.name}} className="feature-link">Upload Your Story</Link>
        </div>

        <div className="feature">
          <img src={char} alt="Character Creation" />
          <h2>Character Creation</h2>
          <p>Embark on the art of character creation for your anonymous tales. Develop personas with depth, keeping identities shrouded in mystery, adding intrigue to your narrative canvas.</p>
          <a href="/character" className="feature-link">Make Your Character</a>
        </div>

        <div className="feature">
          <img src={cate} alt="Specialized Genres" />
          <h2>Specialized Genres</h2>
          <p>
            Discover your perfect read effortlessly on our platform. Tailored genres ensure a clutter-free experience, so you find exactly what you're looking for without distractions!</p>
          <a href="#category_" className="feature-link">Explore Your Interest</a>
        </div>

        {/* <div className="feature">
        <img src={collab} alt="Collaborative Writing Tools" />
        <h2>Collaborative Writing Tools</h2>
        <p>Co-author stories anonymously, embracing a collaborative and diverse creative process.</p>
        <a href="/collaborative-writing" className="feature-link">Explore Writing Tools</a>
      </div> */}
      </section>
    </div>
  );
};

export default WhatSetsUsApart;