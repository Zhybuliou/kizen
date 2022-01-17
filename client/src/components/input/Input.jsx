import React from 'react';
import './input.scss';

export default function Input(props) {
    return (
      <input 
      className='input-main' 
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value} 
      type={props.type} 
      placeholder={props.placeholder}/>
    )
}
