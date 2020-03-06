import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { APIURL } from '../config';
import PostDetail from './PostDetail';


const ListView = () => {
  //basically the homepage of the app: is accessible upon login or signup
  //maps out and formats all the posts from the Posts API
  //fetches from /posts/

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
    <div>
      {posts.map(post => (
          <div key={post.id}>
        <Link to={`posts/${post.id}`}>
          <Route
            exact
            path={'/posts/:id'}
            render={props => {
              return <PostDetail match={props.match} />;
            }}
          />
          <div>
            <img src={post.img_url} alt="kitty post" />
            <h4>{post.author}</h4>
            <p>{post.body}</p>
            <p>View Comments</p>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default ListView;
