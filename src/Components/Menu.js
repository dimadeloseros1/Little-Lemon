import React from 'react'
import brucheta from "../Assets/Bruschetta-Chicken.jpg"
import salad from "../Assets/greek salad.jpg"
import lemon from "../Assets/lemon dessert.jpg"
import {BsFillCartCheckFill} from "react-icons/bs"

export const Menu = () => {
  return (
    <main>
    <section className='first--section'>
      <h1 className='first--section__header'>This weeks specials!</h1>
      <button className='online--menu__button'>Online Menu</button>
    </section>
    <section className='main--section'>
      <article className='main--article'>
        <img style={{height: "250px", width: "320px", borderRadius: "10px 10px 0px 0px"}} src={salad} alt="Salad-Dish" />
        <div className='description'>
          <h3>Greek Salad</h3>
          <p style={{color: "#F4CE14"}}>$12.99</p>
        </div>
        <p className='main--paragraph'>The famouse greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <div className='main--article__footer'>
          <p>Add</p>
          <BsFillCartCheckFill style={{fontSize: "25px"}}/>
        </div>
      </article>
      <article className='main--article'>
        <img style={{height: "250px", width: "320px", borderRadius: "10px 10px 0px 0px"}} src={brucheta} alt="Salad-Dish" />
        <div className='description'>
          <h3>Bruchetta</h3>
          <p style={{color: "#F4CE14"}}>$5.99</p>
        </div>
        <p className='main--paragraph'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <div className='main--article__footer'>
          <p>Add</p>
          <BsFillCartCheckFill style={{fontSize: "25px"}}/>
        </div>
      </article>
      <article className='main--article'>
        <img style={{height: "250px", width: "320px", borderRadius: "10px 10px 0px 0px"}} src={lemon} alt="Salad-Dish" />
        <div className='description'>
          <h3>Lemon Dessert</h3>
          <p style={{color: "#F4CE14"}}>$5.00</p>
        </div>
        <p className='main--paragraph'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <div className='main--article__footer'>
          <p>Add</p>
          <BsFillCartCheckFill style={{fontSize: "25px"}}/>
        </div>
      </article>
    </section>
  </main>
  )
}
