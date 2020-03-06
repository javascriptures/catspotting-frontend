import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';

function PostDetail({match}){
    //shows post on a single page
    //maps all comments on the post and renders them through CommentTemplate
    //references CommentForm at the bottom (after mapping)
    //~gold feature~ allows likes on comments and post
    //user can edit or delete post

    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const useMountEffect = (post) => useEffect(post, [])
    

    function fetchData() {
        fetch(`${APIURL}/posts/${match.params.id}`)
            .then(response => response.json())
            // .then(response => {console.log(response)})
            .then(data => setPost(data))
            .catch(error => {
                console.log(error);
                setError(true);
            });
      }

    useMountEffect(fetchData);
    console.log(post)
    
    //   useEffect(() => {
    //     fetchData();
    //     console.log(post)
    //   }, []);

    // useEffect(() => {
    //     fetch(`${APIURL}/posts/${match.params.id}`)
    //         .then(response => response.json())
    //         // .then(response => {console.log(response)})
    //         .then(data => setPost(data))
    //         .then(console.log(post))
    //         .catch(error => {
    //             console.log(error);
    //             setError(true);
    //         });
    // }, []);
    
    if (error) {
        return (<div>
            <p>Oops!</p>
            <img src={require("./images/broken.png")}/>
        </div>)
    }
    return (
        <p>help</p>
    )
};

export default PostDetail;