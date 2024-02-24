import React, { useState } from 'react';
import "./Carosol.css";
import cor1 from './cor1.jpg';
import Carousel from 'react-elastic-carousel';
import Cards from './Cards';
import wisper from './assets/wisper.jpg';
function Carosol() {
    const items=[
        {
            id: 1, 
            title: 'The Enigma of the Whispering Manor',
            disc:"The Enigma of the Whispering Manor' is a mysterious tale by the reclusive writer Amelia Sterling. One stormy night, a stranger tells her about an abandoned, eerie manor in the woods. Intrigued, Amelia investigates and discovers a ghostly figure with a tragic story. She documents the tale, and as dawn breaks, the stranger vanishes. The story becomes one of Amelia's celebrated works, adding to the mystery surrounding the enigmatic author.",
            author: "Amelia Sterling"
            
        },

        {
            id: 2, 
            title: 'Echoes of Tomorrow',
            disc:"Echoes of Tomorrow, penned by the imaginative Dr. Marcus Orion, unfolds in a future Earth on the brink of collapse. Scientist Dr. Elena Marlowe discovers a time portal, seeking aid from a advanced civilization. Upon her return, armed with futuristic knowledge, she faces the challenge of convincing a skeptical world to change its course. The tale explores resilience, innovation, and the collective effort needed to shape a renewed future.",
            author: "Dr. Marcus Orion"

        },

        {
            id: 3,  
            title: 'The Song of the Enchanted Grove',
            disc:"Dive into the spine-tingling charm of 'The Shadows in Room 13' by Victor Blackwood, a tale that unravels in the mysterious Ravenwood Inn. Join the daring investigator as he confronts the legends surrounding Room 13, where shadows dance and whispers linger. This adorable horror story is the perfect blend of spookiness and charm, capturing the essence of a chilling adventure in a quaint town. Grab a cozy blanket and prepare for a delightful shiver down your spine!",
            author: "Victor Blackwood"

        },
        {
            id: 4, 
            title: 'cor1',
            disc:" ",
            author: " "
        },
    ];
    // const { items } = state;
  return (
    <div className='carosol_background'>
        <h1 className='tales'>Top Tales Taking the SpotLight!</h1>
    <Carousel>
    {/* key={Number(item.id)} */}
        {items.map(item => <Cards title={item.title} disc={item.disc} author={item.author}/>)}
    </Carousel>
    </div>
  )
}

export default Carosol
