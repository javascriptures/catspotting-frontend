import React from 'react';
import { useLocation } from 'react-router-dom';

function AuthForm({ credentials, handleChange, handleSubmit }) {
  const location = useLocation();
  return (
    <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            value={credentials.username}
            onChange={handleChange}
            id="username"
            type="text"
            required
          ></input>
        </>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        value={credentials.password}
        onChange={handleChange}
        id="password"
        type="password"
        required
      ></input>
      <button type="submit">
        {location.pathname === '/token/obtain/' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default AuthForm;