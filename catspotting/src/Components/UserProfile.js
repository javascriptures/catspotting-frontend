import { UserContext } from './UserContext';
import { Link, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';


const UserProfile = () => {
    //imports user data from user API
    //shows posts and comments made by user
    //(this will all be on a single page)
    //allows user to edit or delete previous posts
    const { user, setUser } = useContext(UserContext);

    return (
        <>
        <div className="signoutpage">
        <p className="aboutheader">Hi, Username!</p>
        <div className="signoutcontainer">
        <Link to="/" onClick={() => setUser(null)}>
        <button className="welcomebuttons" id="authbutton">Sign out</button>
        </Link>
        </div>
        </div>
        </>
    )
};

export default UserProfile;