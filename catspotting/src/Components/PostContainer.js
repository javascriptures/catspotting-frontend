import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';
import CommentTemplate from './CommentTemplate'


function PostContainer({post}){
    const [opacity, setOpacity] = useState('1');
    const [imgActive, setimgActive] = useState(false);

    function showDetails() {
        setOpacity(0.5)
        setimgActive(true)
    }
    function mouseAway() {
        setOpacity(1)
        setimgActive(false)
    }
return(
    <div className={`${imgActive ? "show-description" : ""}`} id="postContainer">
            <h5 className="locationTag">{post.location}</h5>
            <img src={post.img_url} alt="kitty post" onMouseEnter={showDetails} onMouseLeave={mouseAway} style={{opacity: opacity}} className="kittyPics"/>
            <p className="description" id="description" onMouseEnter={showDetails} onMouseLeave={mouseAway} >{post.author} <small>{post.body} <br /> 
                {post.comments.map(comment => 
                    <p className="comment">{comment}</p>
                )}</small></p>
    </div>
)
}

export default PostContainer