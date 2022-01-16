import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar-wrapper'>
            <div className='navbar'>
                <div className='logo'><NavLink to = "/">KAIZEN</NavLink></div>
                <div className='navbar-menu'>
                        <ul className='navbar-menu__ul'>
                            <li className='navbar-menu__ul-item'><a href="home">Send</a></li>
                            <li className='navbar-menu__ul-item'><a href="second">Request</a></li>
                            <li className='navbar-menu__ul-item'><a href="exit">Exit</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
