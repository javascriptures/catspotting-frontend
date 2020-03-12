import React from 'react';
import { useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function AuthForm({ credentials, handleChange, handleSubmit }) {
  const location = useLocation();
  return (
    <>
      <div className="authformdiv">
        <form onSubmit={handleSubmit}>
          <p>
            <TextField
              className="textfields"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
            <br />
          </p>
          <p>
            <TextField
              className="textfields"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              type="password"
              required
            />
            <br />
          </p>
        </form>
      </div>
      <div className="authbutton">
        <button
          className="welcomebuttons"
          id="authbutton"
          type="submit"
          onClick={handleSubmit}
        >
          {location.pathname === '/token/obtain/' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </>
  );
}

export default AuthForm;
