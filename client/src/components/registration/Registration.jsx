import React from 'react';
import './registration.scss'
import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';
import { registration } from '../../actions/user';

export default function Registration() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='registration'>
            <h2>Registration</h2>
            <Input value={name} setValue={setName} type="text" placeholder="Name"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
            <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
            <Input type="text" placeholder="Tel"/>
            <Input type="text" placeholder="Отдел"/>
            <Input type="date" placeholder="Birthday"/>
            <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = "Enter"
                  onClick={() => registration(email, password)}
                ></Button>
        </div>
    )
}
