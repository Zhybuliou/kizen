import React from 'react';
import './input.scss';

export default function Input(props) {
    return (
      <input className='input-main' type={props.type} placeholder={props.placeholder}/>
    )
}
