import React from 'react'
import brucheta from "../Assets/Bruschetta-Chicken.jpg"
import salad from "../Assets/greek salad.jpg"
import lemon from "../Assets/lemon dessert.jpg"
import {RiRidingFill} from "react-icons/ri"
import {BiArrowFromBottom} from "react-icons/bi"
import { Testimonials } from './Testimonials'
import { Highlights } from './Highlights'

export const Main = (props) => {

  
  return (
    <div>
      <Highlights />
      <Testimonials />
    </div>
  )
}
