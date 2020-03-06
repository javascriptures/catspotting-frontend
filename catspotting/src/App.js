import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, withRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import CommentForm from './Components/CommentForm';
import CommentTemplate from './Components/CommentTemplate';
import Header from './Components/Header';
import ListView from './Components/ListView';
import Login from './Components/LoginForm';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';
import Signup from './Components/SignupForm';
import UserProfile from './Components/UserProfile';
import Welcome from './Components/Welcome';

const App = () => {
  const [display_form, setDisplay_form] = useState('');
  const [logged_in, setLogged_in] = useState(
    localStorage.getItem('token') ? true : false
  );
  const [username, setUsername] = useState('');

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
    //change the link here???
    fetch('http://localhost:8000/token-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      setLogged_in(true);
      setDisplay_form('');
      setUsername(json.user.username);
    })
  }

  const handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        setLogged_in(true);
        setDisplay_form('');
        setUsername(json.user.username);
      });
  };

  const handle_logout = () => {
    localStorage.removeItem('token');
    setLogged_in(false); 
    setUsername('');
  };

  display_form = form => {
    setDisplay_form(form);
  };

  let form;
  switch (display_form) {
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
      <BrowserRouter>
        {/* only show header if User is NOT on the following paths */}
        {(window.location.pathname !== '/') | '/login' | '/signup' ? (
          <Header />
        ) : null}
        <Nav
            logged_in={logged_in}
            display_form = {display_form}
            handle_logout = {handle_logout}
            />
            {form}
            <h3>
              {logged_in ? `Hello,${username}`: 'Please Log In'}
            </h3>
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/posts" component={ListView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/user/create" component={Signup} />
            <Route exact path="/commenttemplate" component={CommentTemplate} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/posts/:id/comments/:id" component={CommentForm}/>
            <Route exact path="/postform" component={PostForm} />
            <Route exact path="/user/:id/" component={UserProfile} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};
export default withRouter(App);
