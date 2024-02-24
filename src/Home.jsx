import React from 'react'
import WhatSetsUsApart from './WhatSetsUsApart'
import Carosol from './Carosol'
import CategorySection from './CategorySection'
import Footer from './Footer'
import Navbar from './Navbar'
import Hero from './Hero'
import { useLocation } from 'react-router-dom'

function Home() {
  const location=useLocation()
  var name = "";
  if(location.state!=null && location.state.id){
    name=location.state.id;
  }
  return (
    <div>
        
     <Navbar Name={name}/>
      <Hero Name={name}/>
      <WhatSetsUsApart Name={name}/>
      <Carosol/>
      <CategorySection/>
      <Footer/> 
    </div>
  )
}

export default Home
