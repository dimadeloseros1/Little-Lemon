import React from 'react'
import logo from "../Assets/Logo.png"
import { Link } from "react-router-dom"
import { About } from './About'
export const Nav = (props) => {
  return (
    <nav className='nav'>
        <div className='logo'>
            <img src={logo} alt="Little Lemon logo" />
        </div>
         <ul className='navigation'>
         <Link to="/">Home</Link>
         <Link to="/About">About</Link>
         </ul>
    </nav>
  )
}
