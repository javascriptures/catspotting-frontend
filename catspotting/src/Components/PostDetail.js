import React, { useState, useEffect, useContext } from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import { UserContext } from './UserContext';
import { APIURL } from '../config';
import CommentTemplate from './CommentTemplate';
import PostEdit from './PostEdit'

function PostDetail({ match }) {
  //shows post on a single page
  //maps all comments on the post and renders them through CommentTemplate
  //references CommentForm at the bottom (after mapping)
  //~gold feature~ allows likes on comments and post
  //user can edit or delete post

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const useMountEffect = post => useEffect(post, []);

  const { user } = useContext(UserContext);

  function fetchData() {
    fetch(`${APIURL}/posts/${match.params.id}`)
      .then(response => response.json())
      // .then(response => {console.log(response)})
      .then(data => setPost(data))
      .catch(error => {
        console.log(error);
        setError(true);
      })
  }

  useMountEffect(fetchData);

  function handleEdit() {
    return(
      <Redirect to={{PostEdit}}/>
    )
  }

  const handleDelete = () => {
    //POST request to API
    fetch(`${APIURL}/posts/${match.params.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.access}`
      },
    })
      .then(res => res.json())
      .then(setPost)
      .catch(error => {
        console.log('Logged error: ', error);
        setError(true);
        console.log(user);
      });
      history.goBack();
  };

  if (post) {
    return (
      <>
      <div key={post.id} className="detailcontainer">
        <p>{post.location}</p>
        <img src={post.img_url} className="postimage"/>
        <div className="descriptioncontainer">
          <p className="owner">
          {post.owner}:
          </p>
          <p className="body">
          {post.body}
          </p>

          <img src={require('../images/edit.png')} className="icons"/>
          <img src={require('../images/delete.png')}className="icons" onClick={handleDelete}/>
        </div>
        <ul>
          {post.comments && post.comments.map(comment => (
            <div key={comment} className="descriptioncontainer">
            <p className="owner" id="user">User:</p> 
            <p className="body" id="comment">{comment}</p>
            </div>
          ))}
        </ul>
      </div>
      </>
    );
  }

  return (
    <div>
      <p>Oops!</p>
      <img src={require('../images/broken.png')} />
    </div>
  );
}
export default PostDetail;
