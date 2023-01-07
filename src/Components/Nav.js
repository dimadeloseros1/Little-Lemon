import React from 'react'
import logo from "../Assets/Logo.png"
export const Nav = () => {
  return (
    <nav className='nav'>
        <div className='logo'>
            <img src={logo} alt="Little Lemon logo" />
        </div>
         <ul className='navigation'>
            <li>
              <a href="/#">Home</a>  
            </li>
            <li>
                <a href="/#">About</a>
            </li>
            <li>
                <a href="/#">Reservations</a>
            </li>
            <li>
                <a href="/#">Order-Online</a>
            </li>
            <li>
                <a href="/#">Login</a>
            </li>
         </ul>
    </nav>
  )
}
