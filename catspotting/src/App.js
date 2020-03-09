import React, { useState, useEffect } from 'react';
import { UserContext } from './Components/UserContext';
import './App.css';
import { BrowserRouter, withRouter, Route, Switch } from 'react-router-dom';
import axiosInstance from '../src/axiosApi';
import About from './Components/About';
import CommentForm from './Components/CommentForm';
import CommentTemplate from './Components/CommentTemplate';
import Header from './Components/Header';
import ListView from './Components/ListView';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';
import UserProfile from './Components/UserProfile';
import Welcome from './Components/Welcome';
import Nav from './Components/Nav';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import { APIURL } from './config';

const App = () => {
  const [user, setUser] = useState(null);
  const [displayed_form, setDisplayed_form] = useState('');
  const [logged_in, setLogged_in] = useState(
    localStorage.getItem('token') ? true : false
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (logged_in) {
      fetch('change.this', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          setUsername(json.username);
        });
    }
  });

  const handle_login = (e, data) => {
    e.preventDefault();
    // try {
    //   const response = axiosInstance.post('/token/obtain/');
    //   console.log(response);
    //   axiosInstance.defaults.headers['Authorization'] =
    //     'JWT ' + response.data.access;
    //   localStorage.setItem('access_token', response.data.access);
    //   localStorage.setItem('refresh_token', response.data.refresh);
    //   return data;
    // } catch (error) {
    //   throw error;
    // }
    //change the link here???
    fetch(`${APIURL}/api/token/obtain`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        setUser(true);
        setDisplayed_form('');
        setUsername(json.user.username);
      });
  };

  const handle_signup = (e, data) => {
    e.preventDefault();
    fetch(`${APIURL}/api/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        setLogged_in(true);
        setDisplayed_form('');
        setUsername(json.user.username);
      });
  };

  const handle_logout = () => {
    localStorage.removeItem('token');
    setLogged_in(false);
    setUsername('');
  };

  const display_form = form => {
    setDisplayed_form(form);
  };

  let form;
  switch (displayed_form) {
    case 'login':
      form = <LoginForm handle_login={handle_login} />;
      break;
    case 'signup':
      form = <SignupForm handle_signup={handle_signup} />;
      break;
    default:
      form = null;
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          {/* only show header if User is NOT on the following paths */}
          {(window.location.pathname !== '/') | '/login' | '/signup' ? (
            <Header />
          ) : null}
          <Nav
            logged_in={logged_in}
            display_form={display_form}
            handle_logout={handle_logout}
          />
          {form}
          <h3>{logged_in ? `Hello,${username}` : 'Please Log In'}</h3>
          <main>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/posts" component={ListView} />
              <Route exact path="/about" component={About} />
              <Route exact path="/token/obtain" component={LoginForm} />
              <Route exact path="/user/create" component={SignupForm} />
              <Route
                exact
                path="/commenttemplate"
                component={CommentTemplate}
              />
              <Route exact path="/posts/:id" component={PostDetail} />
              <Route
                exact
                path="/posts/:id/comments/:id"
                component={CommentForm}
              />
              <Route exact path="/postform" component={PostForm} />
              <Route exact path="/user/:id/" component={UserProfile} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};
export default withRouter(App);
