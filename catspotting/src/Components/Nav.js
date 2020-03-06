import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Nav({display_form, logged_in, handle_logout}) {
  // nav links that user will see if they are not logged in
  const logged_out_nav = (
    <ul>
      <li onClick={() => display_form('login')}>login</li>
      <li onClick={() => display_form('signup')}>signup</li>
    </ul>
  );
  // nav links that user will see if they are logged in
  const logged_in_nav = (
    <ul>
      <li onClick={handle_logout}>logout</li>
    </ul>
  );
  // logic to display logged_in or logged_out nav depending on user state
  return <div>{logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;
// use PropTypes to pass functions/state as props from app.js
Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
