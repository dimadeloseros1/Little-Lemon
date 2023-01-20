import React from 'react'
import logo from "../Assets/Logo.png"
export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__section'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <article className='footer__article--navigation'>
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
          <address>
            <p>Swindon</p>
            <p>Plymouth Street n27</p>
          </address>
        </article>
        <article className="footer__article--socialMedia">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://en-gb.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://github.com/">Github</a></li>
          </ul>
        </article>
      </section>
    </footer>
  )
}
