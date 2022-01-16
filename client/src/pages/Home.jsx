import React from 'react';
import logo from '../assets/logo.jpg';
import './home.scss';
import Button from '../components/button/Button';

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
                  children = "Sing up"
                />
                <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = "Registration"
                />
            </div>
        </div>
    )
}
