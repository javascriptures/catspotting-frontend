import React from 'react';

const About = () => {
    //Just an about page with a body describing the purpose of the app and how to use it
    //Have our github links, pictures, names, and short descriptions about ourselves and our roles in the project
    //maybe make an email contact form?
    //import InfoKitty image

    return (
        <>
        <p className="aboutheader">About</p>
        <p className="devtext">Inspired by the popular Reddit and Facebook communities, Catspotting is an app for cat lovers, by cat lovers! Users can create an account, then sign in and post photos and info about cats they spot in the wild!</p>
        <div className="aboutdiv">
        <h3>Meet the devs</h3>
        <div className="headshotdiv">
            <div id="devprofile">
                <img className="headshots"src={require('../images/JaimieLoweSopranoProfilePic.jpeg')}/>
                {/* we can put something different below. I'm just bored and it's late */}
                <p className="devtext">Hi, I'm Jaimie!  I'm a software engineer, professional singer and proud cat lady.  I was inspired to create this app by my feral son, Tuxy (the tuxedo kitty in our seed data), whom I TNR'd in May 2019, and the large feral cat colony on the street behind my house.  Cats are constantly popping in and out of my backyard, and I always see more than one when I walk around my neighborhood.  Catspotting has always been a passion of mine, and after spending a lot of time in Facebook and Reddit cat communities, I wondered if there was a Catspotting app.  It turns out there wasn't, so now there is!  I'm so glad that fellow cat-lover and kickass developer Jordan was on board with my idea, and that we could make it come to life together!</p>
            </div>
            <div className="devprofile">
                <img className="headshots"src={require('../images/Jordan_headshot.JPG')}/>
                <p className="devtext">Hi, I’m Jordan, cat owner, cat lover, former clothing designer, and software engineer. I worked on the UI design and frontend development of the Catspotting project. With a background in design and a new found love for responsive Frontend development in React, I had a lot of fun building out the user’s experience for this app. In the design stages of Catspotting, I wanted to find colors that were calming and easy on the eyes for users looking to just kick back and relax with some beautiful pictures of cats. I have strived, and will continue to, make this site as intuitive and interactive for the user as possible. I hope you enjoy your Catspotting experience!</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default About;