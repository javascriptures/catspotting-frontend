import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from './UserContext';
import { APIURL } from '../config';

function Signin(props) {
  document.body.style = 'background: white;';
  const { user, setUser } = useContext(UserContext);
  const { state: historyState } = props.history.location;
  const initialState = {
    name: historyState ? historyState.name : '',
    email: historyState ? historyState.email : '',
    password: historyState ? historyState.password : ''
  };
  const url = `${APIURL}/api/token/obtain/`;
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState(false);
  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(setUser)
      .catch(error => {
        console.log('Error: ', error);
        setError(true);
        return <Redirect to={'/'} />
  })
}

  return (
    <div>
      <h3>Sign In</h3>
      {historyState && (
        <h4
          style={{
            color: 'white',
            background: 'green',
            padding: '1rem',
            position: 'relative',
            userSelect: 'none'
          }}
        >
          Thanks for signing up! Please login.
        </h4>
      )}
      {error && (
        <h4
          style={{
            color: 'white',
            background: 'red',
            padding: '1rem',
            position: 'relative',
            userSelect: 'none'
          }}
          onClick={() => setError(false)}
        >
          Sorry, something went wrong. Please try again!
          <span style={{ position: 'absolute', right: '.75rem', top: '.5rem' }}>
            ✕
          </span>
        </h4>
      )}
      {user && <Redirect to="/posts/" />}
      <AuthForm
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default Signin;
