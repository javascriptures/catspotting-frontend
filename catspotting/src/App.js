import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, withRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import CommentForm from './Components/CommentForm';
import CommentTemplate from './Components/CommentTemplate';
import Header from './Components/Header';
import ListView from './Components/ListView';
import Login from './Components/Login';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';
import Signup from './Components/Signup';
import UserProfile from './Components/UserProfile';
import Welcome from './Components/Welcome';

const App = () => {
  const [displayed_form, setDisplay_form] = useState('');
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

  return (
    <>
      <BrowserRouter>
        {/* only show header if User is NOT on the following paths */}
        {(window.location.pathname !== '/') | '/login' | '/signup' ? (
          <Header />
        ) : null}
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/posts" component={ListView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/user/create" component={Signup} />
            <Route exact path="/commentform" component={CommentForm} />
            <Route exact path="/commenttemplate" component={CommentTemplate} />
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
    </>
  );
};
export default withRouter(App);
