import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <>
      <h2>Lista de usuarios</h2>
      <section>
        {users.map((usr) => <User key={usr.id} user={usr} />)}
      </section>
    </>
  );
};

export default UsersList;