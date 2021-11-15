import React from 'react';
import './rpcfooter.css';

// Icons

import FacebookIcon  from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function RanchPCFooter() {
    return (
        <footer>
            <div className="share">
                <h3><br/>Ranch PC Services</h3>
                <a href="https://www.facebook.com/ranchPCPH">
                    <FacebookIcon />
                </a>
                <a href="rancpcsvs@gmail.com">
                    <EmailIcon />
                </a>
                <a href="09958497534">
                    <PhoneIphoneIcon />
                </a>
            </div>
    
            <h1 className="credit">Copyright 2020 <a href="#home">Ranch PC.</a> all rights reserved</h1>
        </footer>
    )
}

export default RanchPCFooter;
