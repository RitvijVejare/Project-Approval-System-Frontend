import React from 'react'
import './Homepage.css'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="home-route">
      <ul>
        <li><NavLink to="/"><h1>HOME</h1></NavLink></li>
        <li><NavLink to="/admin"><h1>ADMIN</h1></NavLink></li>
        <li><NavLink to="/internal-guide"><h1>INTERNAL GUIDE</h1></NavLink></li>
        <li><NavLink to="/project-incharge"><h1>PROJECT INCHARGE</h1></NavLink></li>
        <li><NavLink to="/student"><h1>STUDENT</h1></NavLink></li>
      </ul>
    </div>
  )
}

export default Homepage
