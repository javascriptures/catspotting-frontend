import React from 'react';
const Header = () => {
    //just the header bar that is static at the top of the screen
    //imports and routes icons like Home, About, and UserProfile
    //~gold feature~ transitions upon scroll
    return (
        <div className="headerContainer">
        <header>
            <div className="alignHeader">
                <h1 className="headerName">CatSpotting</h1>
            </div> 
        </header>
        </div>
    );
};

export default Header;