import React from 'react'
import logo from "../Assets/Logo.png"
export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer--section'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <article className='footer--article__navigation'>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </article>
        <article className="footer--article__contact">
          <h3>Contact Info</h3>
          <p>Swindon</p>
          <p>Plymouth Street n27</p>
        </article>
        <article className="footer--article__socialMedia">
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Github</li>
          </ul>
        </article>
      </section>
    </footer>
  )
}
