import React from 'react';
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footerContainer">
            <footer>
                <p>© 2020 Catspotting</p>
                <a to={'https://github.com/javascriptures/catspotting-frontend'}>
                <img src={require('../images/github.png')} className="github"/>
                </a>
                <p>Jordan Taylor</p>
                <a href='https://github.com/javascriptures'>
                <img src={require('../images/github.png')} className="github"/>
                </a>
                <p>Jaimie Lowe</p>
                <a href='https://github.com/jnlsings'>
                <img src={require('../images/github.png')} className="github"/>
                </a>
            </footer>
        </div>
    )
}

export default Footer;