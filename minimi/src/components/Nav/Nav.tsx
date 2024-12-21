import React from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png"
import Icon from "../Icon/Icon"
const Nav = () => {
  return (
    <nav className="nav">
      
      <a href='#'><img className="logo" src={logo}/><span>minimi</span></a>
      <a href="#"></a>
      <Icon></Icon>
      <ul className="list nav__list">
        <li className="nav__item"><a href="#">수업 안내</a></li>
        <li className="nav__item"><a href="#">강사 소개</a></li>
        <li className="nav__item"><a href="#">시설</a></li>
      </ul>
    </nav>
  )
}

export default Nav