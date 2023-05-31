import React from 'react';
import Logo from "./Logo";
import "../compoStyle/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = ({ handleTheme, darkTheme }) => {
    return (
        <header className="App-header" style={{ 'backgroundColor': darkTheme ? "#232323" : "#ffffff" }}>
            <div className='logo'>
                <a href='#' style={{ textDecoration: "none" }}>
                    <Logo />
                </a>
            </div>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <li className='nav-item'><a href='#' style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>home</a></li>
                    <li className='nav-item'><a href='#aboutpage' style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>about</a></li>
                    <li className='nav-item'><a href='#skillspage' style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>skills</a></li>
                    <li className='nav-item'><a href='#sideProjects' style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>projects</a></li>
                    <li className='nav-item'><a href='#contactpage' style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>contact</a></li>
                    <li className='nav-item' onClick={handleTheme} style={{ 'color': darkTheme ? "#f6f6f6" : "#000" }}>
                        {darkTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    </li>
                </ul>
                {/* <div className='nav-item'>home</div>
                <div className='nav-item'>about</div>
                <div className='nav-item'>skills</div>
                <div className='nav-item'>projects</div>
                <div className='nav-item'>contact</div> */}
            </nav>
        </header>
    )
}

export default Header
