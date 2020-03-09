import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';
import CommentTemplate from './CommentTemplate'


function PostContainer({post}){
    const [opacity, setOpacity] = useState('1')

    function showDetails() {
        setOpacity(0.5)
    }
    function mouseAway() {
        setOpacity(1)
    }
return(
    <div>
            <p>{post.location}</p>
            <img src={post.img_url} alt="kitty post" onMouseEnter={showDetails} onMouseLeave={mouseAway} style={{opacity: opacity}}/>
    </div>
)
}

export default PostContainer