import React, { useState, useEffect } from 'react';
import { UserContext } from './Components/UserContext';
import './App.css';
import {
  BrowserRouter,
  withRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
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

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          {/* only show header if User is NOT on the following paths */}
          {(window.location.pathname !== '/') |
          '/token/obtain/' |
          '/user/create/' ? (
            <Header />
          ) : null}
          <h3>{user ? `Hello,${user}` : 'Please Log In'}</h3>
          <main>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/token/obtain/" component={LoginForm} />
              <Route exact path="/user/create/" component={SignupForm} />
              <Route
                exact
                path="/postform"
                render={props => {
                  if (user) {
                    return <PostForm {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/posts"
                component={ListView}
                // render={props => {
                //   if (user) {
                //     return <ListView {...props} />;
                //   } else {
                //     return <Redirect to="/" />;
                //   }
                // }}
              />
              <Route
                exact
                path="/about"
                render={props => {
                  if (user) {
                    return <About {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/commenttemplate"
                render={props => {
                  if (user) {
                    return <CommentTemplate {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/posts/:id"
                component={PostDetail}
                // render={props => {
                //   if (user) {
                //     return <PostDetail {...props} />;
                //   } else {
                //     return <Redirect to="/" />;
                //   }
                // }}
              />
              <Route
                exact
                path="/posts/:id/comments/:id"
                render={props => {
                  if (user) {
                    return <CommentForm {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/user/:id/"
                render={props => {
                  if (user) {
                    return <UserProfile {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
            </Switch>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};
export default withRouter(App);
