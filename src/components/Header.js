import React from 'react';
import Logo from "./Logo";
import "../compoStyle/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    return (
        <header className="App-header">
            <div className='logo'>
                <Logo />
            </div>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <li className='nav-item'><a href='#'>home</a></li>
                    <li className='nav-item'><a href='#aboutpage'>about</a></li>
                    <li className='nav-item'><a href='#skillspage'>skills</a></li>
                    <li className='nav-item'><a href='#sideProjects'>projects</a></li>
                    <li className='nav-item'><a href='#contactpage'>contact</a></li>
                    <li className='nav-item'><FontAwesomeIcon icon={faMoon} /></li>
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
