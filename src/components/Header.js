import React from 'react';
import Logo from "./Logo";
import "../compoStyle/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from './context';

const Header = () => {
    const { theme, handleTheme } = useTheme();

    return (
        <header className={`App-header ${theme}_App-header`}>
            <div className='logo'>
                <a href='#' style={{ textDecoration: "none" }}>
                    <Logo />
                </a>
            </div>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <li className='nav-item'><a href='#' className={`${theme}_nav-anchor`}>home</a></li>
                    <li className='nav-item'><a href='#aboutpage' className={`${theme}_nav-anchor`}>about</a></li>
                    <li className='nav-item'><a href='#skillspage' className={`${theme}_nav-anchor`}>skills</a></li>
                    <li className='nav-item'><a href='#sideProjects' className={`${theme}_nav-anchor`}>projects</a></li>
                    <li className='nav-item'><a href='#contactpage' className={`${theme}_nav-anchor`}>contact</a></li>
                    <li className={`nav-item ${theme}_nav-anchor`} onClick={handleTheme}>
                        {theme === "dark" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
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
