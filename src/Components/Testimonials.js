import React from 'react'
import George from "../Assets/George.jpg"
import Jessica from "../Assets/Jessica.jpeg"
import John from "../Assets/John.jpg"
import Nicky from "../Assets/Nicki.jpg"
import {AiTwotoneStar} from "react-icons/ai"
import {IoIosArrowDropdownCircle} from "react-icons/io"
import { useState } from 'react'
export const Testimonials = () => {
    const [open, setOpen] = useState(false)
    const [openfirstUser, setOpenfirstUser] = useState(false)
    const [openSecondUser, setOpenSecondUser] = useState(false)
    const [openThirdUser, setOpenThirddUser] = useState(false)
    const DropdownItem = (props) => {
        return(
            <li className='dropdownItem'>
                <p>{props.text}</p>
            </li>
        )
    }

  return (
    <div>
        <h1 className='testimonials--header'>Testimonials</h1>
        <section className='testimonials--section'>
            <article className='testimonials--article'>
                <img style={{height: "250px", width: "100%", objectFit: "cover"}} src={George} alt='testimonials--individual' />
                <div className='menu--container'>
                    <div className='menu--trigger' onClick={() =>{setOpen(!open)}}>
                        <IoIosArrowDropdownCircle className='dropdown--icon'/>
                    </div>
                    <div className={`dropdown--menu ${open ? "active" : "inactive"}`}>
                        <p>I honestly cannot believe the quality of food that this restaurant has, simply outstanding! <strong>George</strong></p>
                        <ul className='stars'>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <DropdownItem />
                        </ul>
                    </div>
                </div>
            </article>
            <article className='testimonials--article'>
                <img style={{height: "250px", width: "100%", objectFit: "cover"}} src={Jessica} alt='testimonials--individual' />
                <div className='menu--container'>
                    <div className='menu--trigger' onClick={() =>{setOpenfirstUser(!openfirstUser)}}>
                        <IoIosArrowDropdownCircle className='dropdown--icon'/>
                    </div>
                    <div className={`dropdown--menu ${openfirstUser ? "active" : "inactive"}`}>
                        <p>The food is very good, however, I must say that their service is rather shocking to me! <strong>Jessica</strong></p>
                        <ul className='stars'>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <DropdownItem />
                        </ul>
                    </div>
                </div>
            </article>
            <article className='testimonials--article'>
                <img style={{height: "250px", width: "100%", objectFit: "cover"}} src={John} alt='testimonials--individual' />
                <div className='menu--container'>
                    <div className='menu--trigger' onClick={() =>{setOpenSecondUser(!openSecondUser)}}>
                        <IoIosArrowDropdownCircle className='dropdown--icon'/>
                    </div>
                    <div className={`dropdown--menu ${openSecondUser ? "active" : "inactive"}`}>
                        <p>I really like their Mediterranean food, especially the crab, I might add. <strong>John</strong></p>
                        <ul className='stars'>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <DropdownItem />
                        </ul>
                    </div>
                </div>
            </article>
            <article className='testimonials--article'>
                <img style={{height: "250px", width: "100%", objectFit: "cover"}} src={Nicky} alt='testimonials--individual' />
                <div className='menu--container'>
                    <div className='menu--trigger' onClick={() =>{setOpenThirddUser(!openThirdUser)}}>
                        <IoIosArrowDropdownCircle className='dropdown--icon'/>
                    </div>
                    <div className={`dropdown--menu ${openThirdUser ? "active" : "inactive"}`}>
                        <p>I really appreciate the variety choice in their menu, but mostly out of everything in their meny I enjoy their beverages. <strong>Nicky</strong></p>
                        <ul className='stars'>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <DropdownItem />
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    </div>
  )
}
