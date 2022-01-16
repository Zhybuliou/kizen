import React from 'react';
import logo from '../assets/logo.jpg';
import './home.scss';

export default function Home() {
    return (
        <div className='home-page'>
           <div className='home-page__img'>
             <img  src={logo} alt="logo" />
           </div>
        </div>
    )
}
