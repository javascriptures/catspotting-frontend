import React from 'react';

const About = () => {
    //Just an about page with a body describing the purpose of the app and how to use it
    //Have our github links, pictures, names, and short descriptions about ourselves and our roles in the project
    //maybe make an email contact form?
    //import InfoKitty image

    return (
        <>
        <div className="aboutdiv">
        <p className="aboutheader">About</p>
        <p>Catspotting is a social platform made by cat lovers for cat lovers. We'll put more of a description in here later.</p>

        <h3>Meet the devs</h3>
        <div className="headshotdiv">
            <div id="devprofile">
                <img className="headshots"src={require('../images/JaimieLoweSopranoProfilePic.jpeg')}/>
                {/* we can put something different below. I'm just bored and it's late */}
                <p className="devtext">Hi I'm Jaimie and I like cats. I worked really hard on the backend but now I'm stuck in this computer screen. Please help me, no one can hear me in here.</p>
            </div>
            <div className="devprofile">
                <img className="headshots"src={require('../images/Jordan_headshot.JPG')}/>
                <p className="devtext">Hi I'm Jordan. I like cats and juiceboxes. I curse a lot and no one wants to hire me.</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default About;