import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Info</h1>
      <UserForm onUserSubmit={fetchUserData} />
      {userData && <UserInfo user={userData} />}
    </div>
  );
}

export default App;
