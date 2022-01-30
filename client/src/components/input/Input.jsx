import React from 'react';
import './input.scss';

export default function Input(props) {
    return (
      <input 
      multiple={props.multiple}
      id={props.id}
      className={`input-main ${props.styleInput}`}
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value} 
      type={props.type} 
      placeholder={props.placeholder}/>
    )
}
