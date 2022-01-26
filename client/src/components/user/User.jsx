import React from 'react';
import Avatar from '../avatar/Avatar';
import './user.scss';

export default function User() {
  return (
      <div className='user'>
        <Avatar /> 
        <h2>Name Surname</h2>
        <p>Birthday</p>
        <p>Department</p>
        <p>E-mail</p>
        <p>Tel</p>
        <p>Score: 50 point</p>
      </div>
  );
}
