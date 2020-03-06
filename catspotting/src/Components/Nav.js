import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  // nav links that user will see if they are not logged in
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form('login')}>login</li>
      <li onClick={() => props.display_form('signup')}>signup</li>
    </ul>
  );
  // nav links that user will see if they are logged in
  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  // logic to display logged_in or logged_out nav depending on user state
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;
// use PropTypes to pass functions/state as props from app.js
Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
