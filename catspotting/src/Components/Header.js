import React from 'react';

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


    return (
        <div className="headerContainer" id="navbar">
        <header>
            <div className="alignHeader">
                <p className="headerName">CatSpotting</p>
            </div> 
        </header>
        </div>
    );
};

export default Header;