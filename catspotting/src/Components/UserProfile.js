import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';


const UserProfile = () => {
    //imports user data from user API
    //shows posts and comments made by user
    //(this will all be on a single page)
    //allows user to edit or delete previous posts
    const { user, setUser } = useContext(UserContext);
    return (
        <>
        <Link to="/" onClick={() => setUser(null)}>
              Sign Out
        </Link>
        </>
    )
};

export default UserProfile;