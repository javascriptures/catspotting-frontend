import React from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './Components/About'
import CommentForm from './Components/CommentForm'
import CommentTemplate from './Components/CommentTemplate'
import Header from './Components/Header'
import ListView from './Components/ListView'
import Login from './Components/Login'
import PostDetail from './Components/PostDetail'
import PostForm from './Components/PostForm'
import Signup from './Components/Signup'
import UserProfile from './Components/UserProfile'
import Welcome from './Components/Welcome'

const App = () => {
    return (
      <>
      <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/posts" component={ListView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/commentform" component={CommentForm} />
            <Route exact path="/commenttemplate" component={CommentTemplate} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/posts/:id/comments/:id" component={CommentForm} />
            <Route exact path="/postform" component={PostForm} />
            <Route exact path="/user/:id/" component={UserProfile} />
          </Switch>
        </main>
      </>
    );
  };
  export default App;