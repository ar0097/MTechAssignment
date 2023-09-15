import React from 'react';
import './UserInfo.css'
const UserInfo = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>@{user.login}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Public Gists: {user.public_gists}</p>
      <p>Profile Created At: {user.created_at.slice(0, 10)}</p>
    </div>
  );
};

export default UserInfo;
