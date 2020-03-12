import React from 'react';
import {Link} from 'react-router-dom';


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
// } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
// }
// }

const Header = () => {
    //just the header bar that is static at the top of the screen
    //imports and routes icons like Home, About, and UserProfile
    //~gold feature~ transitions upon scroll

    document.body.style = 'background: white;'

    return (
        <div className="headerContainer" id="navbar">
        <header>
            <div id="alignHeader">
                <Link to={'/posts'}>
                <p className="headerName">CatSpotting</p>
                </Link>
            </div> 

            <div>

            </div>

            <div className="iconContainer">
                <Link to={'/posts'}>
                    <img className="icons" id="home"src={require('../images/Home_icon.png')} alt="Home icon"/>
                </Link>
                <Link to={'/users/:id'}>
                    <img className="icons" src={require('../images/User_icon.png')} alt="User icon"/>
                </Link>
                <Link to={'/about'}>
                    <img className="icons" id="info" src={require('../images/Info_icon.png')} alt="Info icon"/>
                </Link>
            </div>
        </header>
        </div>
    );
};

export default Header;