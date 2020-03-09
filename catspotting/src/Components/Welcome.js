import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
    //simple welcome page that shows mp4 loop of glittery eyed kitty
    //has login and signup buttons
    //redirects to login or signup upon handleSubmit

    document.body.style = 'background: #e7d8c8;';

    return(
        <>
        <div className="Welcome">
        <p className="WelcomeHeader">Catspotting</p>
        </div>
        <div>
        <video id="background-video" autoPlay loop muted playsinline>
                <source src={require('../images/Kawaiicat-PixTeller (1).mp4')} type="video/mp4" />
        </video>
        <Link to={'/token/obtain'}>
            <button>Login</button>
        </Link>
        <Link to={'/user/create'}>
            <button>Sign up</button>
        </Link>
        </div>
        </>
    );
};

export default Welcome;