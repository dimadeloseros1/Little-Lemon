import React from 'react'
import {Routes, Route} from "react-router-dom"
import { About } from './About'
import { Footer } from './Footer'
import { Header } from './Header'
import { Nav } from './Nav'

export const Layout = (props) => {
  return (
    <>
      <Nav />
      <Header />
        <main>{props.children}</main>
      <hr/>
      <Footer />
    </>
  )
}
