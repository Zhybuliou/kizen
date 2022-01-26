import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { FaRegEnvelope } from 'react-icons/fa';

export default function Navbar({isAuth}) {
    const dispatch = useDispatch();
    return (
        <div className='navbar-wrapper'>
            <div className='navbar'>
                <div className='logo'><NavLink to = "/">KAIZEN</NavLink></div>
                {isAuth && 
                <div className='navbar-menu'>
                        <ul className='navbar-menu__ul'>
                            <li className='navbar-menu__ul-item'><NavLink to="/mail"><FaRegEnvelope /></NavLink></li>
                            <li className='navbar-menu__ul-item'><NavLink to = "/">Info</NavLink></li>
                            <li className='navbar-menu__ul-item'><NavLink to="/second">Shop</NavLink></li>
                            <li className='navbar-menu__ul-item' 
                            onClick={() => dispatch(logout())}>
                            <NavLink to = "/">Exit</NavLink>
                            </li>
                        </ul>
                </div>
            }
            </div>
        </div>
    )
}
