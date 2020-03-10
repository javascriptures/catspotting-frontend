import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Components/UserContext';
import { Link, Route } from 'react-router-dom';
import { APIURL } from '../config';
import PostDetail from './PostDetail';
import PostContainer from './PostContainer';

const ListView = () => {
  //basically the homepage of the app: is accessible upon login or signup
  //maps out and formats all the posts from the Posts API
  //fetches from /posts/
  const { user, setUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${APIURL}/posts`)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => {
        console.log('Error: ', error);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>Sorry, we're working on it...</p>
        <img src={require('../images/error.png')} alt="error kitty" />
      </div>
    );
  }
  return (
    <>
    <div>{user}</div>
    <div className="listviewcontainer">
      {posts.map(post => (
        <div key={post.id} className="listitems">
          <Link to={`posts/${post.id}`}>
            <Route
              exact
              path={'/posts/:id'}
              render={props => {
                return <PostDetail match={props.match} />;
              }}
            />
            <PostContainer post={post} />
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default ListView;
