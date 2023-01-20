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
            <img style={{cursor: "pointer"}} src={logo} alt="Little Lemon logo" />
          </Link>
        </div>
        <button className="hamburger" id="hamburger" onClick={toggleFunc}>
          <GiHamburgerMenu />
        </button>
         <ul className={`navigation__menu ${isOpen ? "open" : "closed"}`} >
            <li className='nav__item'>
              <Link to="/" onClick={toggleFunc}>Home</Link>
            </li>
            <li className='nav__item'>
              <Link to="/About" onClick={toggleFunc}>About</Link>
            </li>
            <li className='nav__item'>
              <Link to="/Menu" onClick={toggleFunc}>Menu</Link>
            </li>
            <li className='nav__item'>
              <Link to="/Booking" onClick={toggleFunc}>Booking</Link>
            </li>
         </ul>
    </nav>
  )
}
