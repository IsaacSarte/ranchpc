import React from 'react';
import './rpcheader.css';

function RanchPCHeader() {
    return (
        <header>
            <img src=".././images/nav.jpg" className="banner"  alt="" />
            <a href="" className="logo">Ranch PC
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>

            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default RanchPCHeader;
