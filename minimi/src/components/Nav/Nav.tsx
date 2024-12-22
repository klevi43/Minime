import React from 'react'
import { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png"
import Icon from "../Icon/Icon"
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
      setIsOpen(!isOpen);
  }
  return (
    <nav className="nav">
      
      <a href='#'><img className="logo" src={logo}/>minimi</a>
      <button className="hidden" onClick={toggleNavBar}><Icon/></button>
      <ul className={`list nav__list ${isOpen ? ".collapsible--expanded .collapsible__content" : "collapsible__content"}`}>
        <li className="nav__item"><a href="#">수업 안내</a></li>
        <li className="nav__item"><a href="#">강사 소개</a></li>
        <li className="nav__item"><a href="#">시설</a></li>
      </ul>
    </nav>
  )
}

export default Nav