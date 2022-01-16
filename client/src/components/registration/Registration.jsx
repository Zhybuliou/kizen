import React from 'react';
import './registration.scss'
import Input from '../input/Input';
import Button from '../button/Button';

export default function Registration() {
    return (
        <div className='registration'>
            <h2>Registration</h2>
            <Input type="text" placeholder="Enter your name"/>
            <Input type="text" placeholder="Enter your name"/>
            <Input type="text" placeholder="Enter your name"/>
            <Input type="text" placeholder="Enter your name"/>
            <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = "Enter"
                ></Button>
        </div>
    )
}
