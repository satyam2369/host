import React from 'react'
import './stor.css'
import { useLocation, useParams } from 'react-router-dom'

function Stor() {
  const location = useLocation();
  const { title , dis} =location.state
  
  return (
    <div className='stor' style={{backgroundColor:"black",height:"57.9vh" ,color:"white"}}>
      <h1>{title}</h1>
      <p>{dis}</p>
    </div>
  )
}

export default Stor
