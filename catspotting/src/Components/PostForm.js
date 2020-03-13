import React, { useState, useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { UserContext } from './UserContext';
import { APIURL } from '../config';
import TextField from '@material-ui/core/TextField';

const PostForm = () => {
  const history = useHistory();
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const url = `${APIURL}/posts/`;
  //blank form for posts
  //has input fields and buttons from Material UI
  //input fields: username?, body, title?, location?, img_url/image upload

  function handleChange(event){
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit(event){
    event.preventDefault();
    console.log(post);
    //POST request to API
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${user.access}`
      },
      body: JSON.stringify(post)
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

  return (
    <>
      <div className="postKittyContainer">
        <p className="postheader">Spot a kitty?</p>
        <img src={require('../images/pretty.png')} className="postKitty" />
      </div>
      <div className="postformdiv">
        <form onSubmit={handleSubmit}>
          <p>
            <TextField
              className="textfields"
              id="outlined-multiline-static"
              label="Image url"
              multiline
              rows="4"
              variant="outlined"
              value={post.img_url}
              name="img_url"
              onChange={handleChange}
            />
            <br />
          </p>
          <p>
            <TextField
              className="textfields"
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows="4"
              variant="outlined"
              value={post.body}
              name="body"
              onChange={handleChange}
            />
            <br />
          </p>
          <p>
            <TextField
              className="textfields"
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={post.location}
              name="location"
              onChange={handleChange}
            />
          </p>
        </form>
      </div>
      <div className="postbutton">
        <button
          className="welcomebuttons"
          id="authbutton"
          onClick={handleSubmit}
        >
          Post!
        </button>
      </div>
    </>
  );
};
export default PostForm;
