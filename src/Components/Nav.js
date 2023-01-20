import React, { useState } from 'react'
import logo from "../Assets/Logo.png"
import { Link } from "react-router-dom"
import { About } from './About'
import {GiHamburgerMenu} from "react-icons/gi"
export const Nav = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleFunc = () => {
    setIsOpen(!isOpen)
  }

  
  return (
    <nav className='nav'>
        <div className='logo'>
          <Link to="/">
            <img style={{cursor: "pointer"}} src={logo} alt="Little Lemon logo"/>
          </Link>
        </div>
        <button className="hamburger" id="hamburger" onClick={toggleFunc}>
          <GiHamburgerMenu />
        </button>
         <ul className={`navigation__menu ${isOpen ? "open" : "closed"}`}>
            <li className='nav__item'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav__item'>
              <Link to="/About">About</Link>
            </li>
            <li className='nav__item'>
              <Link to="/Menu">Menu</Link>
            </li>
            <li className='nav__item'>
              <Link to="/Booking">Booking</Link>
            </li>
         </ul>
    </nav>
  )
}
