import React, {useState} from 'react';

const PostForm = () => {
    const [img_url, setimg_url] = useState('');
    const [body, setBody] = useState('');
    const [location, setLocation] = useState('');
    //blank form for posts
    //has input fields and buttons from Material UI
    //input fields: username?, body, title?, location?, img_url/image upload
    const handleSubmit = event => {
        event.preventDefault();
        //POST request to API
        setBody();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Image url:</label>
                <input type="text" name="img_url" ref="img_url" value="img_url"/>

            </form>
        </div>
    )
};

export default PostForm;