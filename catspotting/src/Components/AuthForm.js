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
      <button type="submit" onClick={handleSubmit}>
        {location.pathname === '/token/obtain/' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default AuthForm;

{
  /* <>
  <div className="postKittyContainer">
    <p className="postheader">Spot a kitty?</p>
    <img src={require('../images/pretty.png')} className="postKitty" />
  </div>
  <div className="postformdiv">
    <form onSubmit={handleSubmit}>
      <p>
        <label>Image: </label>
        <TextField
          className="textfields"
          id="outlined-multiline-static"
          label="Image url"
          multiline
          rows="4"
          variant="outlined"
          value={post.img_url}
        />
        <br />
      </p>
      <p>
        <label>Description: </label>
        <TextField
          className="textfields"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          variant="outlined"
          value={post.body}
        />
        <br />
      </p>
      <p>
        <label>Location: </label>
        <TextField
          className="textfields"
          id="outlined-basic"
          label="Home, USA"
          variant="outlined"
          value={post.location}
        />
      </p>
    </form>
  </div>
  <div className="postbutton" onClick={handleSubmit}>
    <button className="welcomebuttons" id="postbutton">
      Post!
        </button>
  </div>
</> */
}
