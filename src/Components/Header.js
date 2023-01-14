import React from 'react'
import food from "../Assets/restauranfood.jpg"
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='header'>
       <section>
          <h1 className='logo--name'>Little Lemon</h1>
          <article className='article'>
            <h2>Chicago</h2>
            <p className='header--paragraph'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          </article>
          <Link to="/Booking">
            <button className='reserve--button'>Reserve a Table</button>
          </Link>
       </section>
       <div className='restaurant--pic'>
          <img className='food--pic' src={food}  alt="restaurant-food" />
       </div>
    </header>
  )
}
