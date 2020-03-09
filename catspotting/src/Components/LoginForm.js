import React, { Component, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// code borrowed from https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a

// const Login = () => {
//     document.body.style = 'background: #E5D4C0;';

//     //login page with input forms and buttons from Material UI
//     //handleSubmit function goes in here
//     //interacts with User API
//     //input forms: username, password, and social auth
//     return null;
// };

// Every time the user types or pastes something
// inside an input field in the form, the onChange
// event listener is fired and calls handleChange.
// In React, when we want to use the event asynchronously
// we should call event.persist().  Learn more here:
// https://reactjs.org/docs/events.html#event-pooling
// We'll get the value from the input that was changed
// using event.target.value.
// We'll use the name of the input to find out which
// property in our state object to update using
// event.target.name.  MAKE SURE THE INPUT HAS A NAME
// and the name matches the property name in the object
// exactly.
// With the spread operator (watch this great video if
// you're not really clear on how spread works:
// https://www.youtube.com/watch?v=pYI-UuZVtHI) we can
// spread the current movies properties and values into
// the new state object and then we override the one
// with the changed value.

// document.body.style = 'background: #E5D4C0;';
class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  // spread current user username/password into new state object and override one with changed value
  handle_change = e => {
    // targeting name property on each input field
    const name = e.target.name;
    // get value from in put that was changed
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
