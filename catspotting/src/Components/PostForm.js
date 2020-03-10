import React, {useState} from 'react';
import { APIURL } from '../config';
import TextField from '@material-ui/core/TextField';

const PostForm = () => {
    const [post, setPost] = useState('');
    const [error, setError] = useState(false);

    const url = `${APIURL}/posts`
    //blank form for posts
    //has input fields and buttons from Material UI
    //input fields: username?, body, title?, location?, img_url/image upload
    const handleSubmit = event => {
        event.preventDefault();
        //POST request to API
        fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer user token`
            },
            body: JSON.stringify(post)
          })
            .then(res => res.json())
            .then(setPost)
            .catch(error => {
                console.log('Error: ', error);
                setError(true);
        });
    }

    return (
        <>
        <div className="postKittyContainer">
        <p className="postheader">Spot a kitty?</p>
        <img src={require('../images/pretty.png')} className="postKitty"/>
        </div>
        <div className="postformdiv">
            <form onSubmit={handleSubmit} >
                <p>
                <label>Image: </label>
                <TextField className="textfields" id="outlined-multiline-static" label="Image url" multiline rows="4" variant="outlined" value={post.img_url}/> <br />
                </p>
                <p>
                <label>Description: </label>
                <TextField className="textfields" id="outlined-multiline-static" label="Description" multiline rows="4" variant="outlined" value={post.body}/> <br />
                </p>
                <p>
                <label>Location: </label>
                <TextField className="textfields" id="outlined-basic" label="Home, USA" variant="outlined" value={post.location}/>
                </p>
            </form>
        </div>
        </>
    );
}
export default PostForm;