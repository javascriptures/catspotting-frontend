import React, { useState } from 'react';
import { UserContext } from './Components/UserContext';
import './App.css';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './Components/About';
import Header from './Components/Header';
import ListView from './Components/ListView';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';
import UserProfile from './Components/UserProfile';
import Welcome from './Components/Welcome';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {user && <Header />}
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/token/obtain/" component={Signin} />
            <Route exact path="/user/create/" component={Signup} />
            {user && <Route exact path="/postform" component={PostForm} />}
            {user && <Route exact path="/posts" component={ListView} />}
            {user && <Route exact path="/about" component={About} />}
            {user && <Route exact path="/posts/:id" component={PostDetail}/>}
            {user && <Route exact path="/users/:id/" component={UserProfile}/>}
          </Switch>
        </main>
        {user && <Footer/>}
      </UserContext.Provider>
    </>
  );
};
export default withRouter(App);
