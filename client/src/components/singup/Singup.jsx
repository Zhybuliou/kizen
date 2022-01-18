import React from 'react';
import './singup.scss';
import Input from '../input/Input';
import Button from '../button/Button';
import { singUp } from '../../actions/user';
import { useState } from 'react';
import {useDispatch} from 'react-redux';

export default function Singup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <div className='sing-up'>
            <h2>Sing Up</h2>
            <Input value={email} setValue={setEmail} type="email" placeholder="email"/>
            <Input  value={password} setValue={setPassword} type="password" placeholder="Password"/>
            <Button
                  border="none"
                  color="#ccc"
                  height = "47px"
                  radius = "25px"
                  width = "241px"
                  children = "Enter"
                  onClick={() => dispatch(singUp(email, password))}
                ></Button>
        </div>
    )
}
