import React from 'react';
import './User.css';
const User = ({ user }) => {
  return (
    <div className='userContainer'>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default User;