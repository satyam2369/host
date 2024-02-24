
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Carosol from './Carosol'
import Cards from './write/Cards'
import WhatSetsUsApart from './WhatSetsUsApart'
import CategorySection from './CategorySection'
import Footer from './Footer'
import Write from './write/write'
import Login from './Login'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from './Home'
import Stor from './write/stor'
import Category from './components/category/category'
import Character from './components/character/Character'




function App() {
  const [Data , setData] = useState([])


  useEffect(() =>{
    fetch("http://localhost:5000/allStory").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    );
    
  }, []);
  console.log(Data);

  
  const user = false;
  return (
    <HashRouter>
    <div className='App'>
      {/* <Navbar/>
      <Hero/>
      {(typeof backendData.users ==='undefined') ? (
        <p>loding</p>
      ) :(
        backendData.users.map((user,i) =>(
          <p key={i}>{user}</p>
        ))
      )}
      
      <WhatSetsUsApart/>
      <Carosol/>
      <CategorySection/>
      <Footer/> */}
      {/* <Write data={Data}/> */}
      <Routes>
        
        <Route path="/" element={ <Home />} />
        
        {/* <Route path="/client/build/index.html" component={<Home/>} /> */}
        <Route path="/upload" element={ <Write data={Data}/> } />
        <Route path="/story" element={ <Stor/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="/character" element={ <Character/> } />

        <Route path="/login"
        element={  user ? <Navigate to="/" /> : <Login/>  } />

        <Route path="/signup" element={ <SignUp />} />
    </Routes>
      {/* react-router-dom */}
          
      
    </div>
    </HashRouter>
  )
}

export default App
