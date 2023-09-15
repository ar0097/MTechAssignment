import React, { useState } from 'react';
import './UserForm.css'
const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
