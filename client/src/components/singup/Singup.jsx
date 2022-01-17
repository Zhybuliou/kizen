import React from 'react';
import './singup.scss';
import Input from '../input/Input';
import Button from '../button/Button';

export default function Singup() {
    return (
        <div className='sing-up'>
            <h2>Sing Up</h2>
            <Input type="text" placeholder="Name"/>
            <Input type="password" placeholder="Password"/>
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
