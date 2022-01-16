import React from 'react';
import logo from '../assets/logo.jpg';
import './home.scss';
import Button from '../components/button/Button';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className='home-page'>
           <div className='home-page__img'>
             <img  src={logo} alt="logo" />
           </div>
           <div className='home-page__btn'>
              <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = {<NavLink to = "/sing-up">Sing up</NavLink>}
                />
                <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = {<NavLink to = "/registration">Registration</NavLink>}
                ></Button>
            </div>
        </div>
    )
}
