import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function () {
    let navigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign:"center"}}>good</h1>
    
        <Link to="/">Back to home page</Link>
        <button onClick={()=>navigate("/")}>Redirect</button>
    </div>
  )
}