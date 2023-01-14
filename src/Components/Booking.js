import React, { useState } from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom'

export const Booking = () => {
    const [reservation, setReservation] = useState({})
    const navigate = useNavigate()

    const confirm = () => {
        navigate("/Confirmation", {state: {reservation: values}})
    }
    const {values, handleBlur, handleChange, handleSubmit, touched, errors} = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            ocassion: "",
            name: "",
            surname: "",
            email: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(12, "Must be 12 charachters or less")
                .min(4, "Must be at least 4 charachters")
                .required("Required"),
            surname: Yup.string()
                .max(15, "Must be less than 15 charachters")
                .min(5, "Must be at least 5 charachters")
                .required("Required"),
            email: Yup.string().email("Invalid email adress").required("Required")
        }),
        onSubmit: async(values, actions) => {
            alert(JSON.stringify(values, null, 2))
            await new Promise((resolve) => setTimeout(resolve, 1000))
            document.getElementById("res--date").value = ""
            document.getElementById("res--time").value = ""
            document.getElementById("guests").value = ""
            document.getElementById("ocassion").value = ""
            actions.resetForm()
            console.log(values)
        }
    })


  return (
    <form className='form' onSubmit={handleSubmit} reservation={reservation}>
        <fieldset className='fieldset'>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
              id='res--date'
              name='date'
              value={values.date}
              onChange={handleChange}
              />
            <br />
            <label htmlFor="res-time">Choose time</label>
            <select name="time" id="res--time"  >
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number"
                placeholder='1'
                name='guests'
                min="1"
                max="10"
                id='guests'
                value={values.guests}
                onChange={handleChange}
                />
            <label htmlFor="ocassion">Ocassion</label>
            <select name="ocassion" id="ocassion" >
                <option value="">Birthday</option>
                <option value="">Aniversary</option>
                <option value="">Wedding</option>
            </select>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder='name'
                id='name'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                />
                {touched.name && errors.name ? (
                    <div className='error--field'>{errors.name}</div>
                ) : null}
            <label htmlFor="surname">Surname</label>
            <input
                type="text"
                name='surname'
                placeholder='Surname'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
                />
                {touched.surname && errors.surname ? (
                    <div className='error--field'>{errors.surname}</div>
                ) : null}
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name='email'
                className='email'
                placeholder='John@....'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />
                {touched.email && errors.email ? (
                    <div className='error--field'>{errors.email}</div>
                ) : null}
                <input className='input--submit' type="submit" value="Make your reservation" onClick={confirm}/>
        </fieldset>
    </form>
  )
}
