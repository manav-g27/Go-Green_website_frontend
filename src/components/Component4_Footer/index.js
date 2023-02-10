import React from 'react'
import './index.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/logo.jpg'
const Footer = () => {
  return (
    <div id='foot-main'>
      <div id='subfoot-1'>
        <div><img src={logo} id='logo-img2'></img></div>
        <br></br>
        <h1>GO <span id='span2'>GREEN</span></h1>
        <br></br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt, necessitatibus totam et corporis molestias, iusto consectetur enim ab temporibus quasi consequatur similique! Nemo cumque recusandae itaque nulla, ullam corrupti!</p>
      </div>
      <div id='subfoot-3'>
      <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
      </div>
      <div id='subfoot-2'>
      <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
        <br></br>
        <div><span>Home</span></div>
      </div>
    </div>
  )
}

export default Footer