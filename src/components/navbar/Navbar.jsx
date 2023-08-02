'use client'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo  from '../../assets/logo.svg'
import './navbar.css'
import Image from 'next/image'



const Navbar = () => {

  const [toogleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Image src={logo} alt="Loading Error" />
        </div>
        <div className="gpt3__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button> 
      </div>
      <div className="gpt3__navbar-menu">
        {toogleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toogleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign Up</button> 
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
