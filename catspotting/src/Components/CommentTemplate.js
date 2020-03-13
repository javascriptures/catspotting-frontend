import React, { useState, useEffect }  from 'react';

const CommentTemplate = ({comment}) => {
    //inherets id from PostDetail and renders the individual comment to be mapped out with the rest in PostDetail
    //has a body input form
    //shows username/author
    //~gold feature~ allow likes from other users
    //allow author to edit or delete with trashcan and pencil icons


const [comments, setComments] = useState(null);

useEffect(() =>
            fetch(`${comment}`)
              .then(response => response.json())
              .then(comments => {
                setComments(comments);
              })
              .catch(error => {
                console.log('Error: ', error);
              }), [setComments])


return (
    <ul>
        {/* <CommentContainer comments={comments}/> */}
    </ul>
    )
};

export default CommentTemplate;