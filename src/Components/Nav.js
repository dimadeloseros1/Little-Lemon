import React from 'react'
import test from "../Assets/Logo.png"
export const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={test} alt="Little Lemon logo" />
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
                <a href="/#">Order Online</a>
            </li>
            <li>
                <a href="/#">Login</a>
            </li>
         </ul>
    </nav>
  )
}
