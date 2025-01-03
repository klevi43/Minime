import React from 'react'
import { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/minimi-logo.jpg"
import Icon from "../Icon/Icon"
// define shape
interface Props {
  isNavOpen: boolean;
  toggleNavBar: () => void;
}
const Nav = ({isNavOpen, toggleNavBar}: Props) => {

  
  return (
    <nav className="nav">
      
      <a href='#' className="logo--text"><img className="logo" src={logo}/>minimi</a>
      <button className="hidden" onClick={toggleNavBar}><Icon/></button>
      <ul className={`list nav__list ${isNavOpen ? ".collapsible--expanded .collapsible__content" : "collapsible__content"}`}>
        <li className="nav__item"><a className="nav__link" href="#">수업 안내</a></li>
        <li className="nav__item"><a className="nav__link" href="#">강사 소개</a></li>
        <li className="nav__item"><a className="nav__link"href="#">시설</a></li>
      </ul>
    </nav>
  )
}

export default Nav