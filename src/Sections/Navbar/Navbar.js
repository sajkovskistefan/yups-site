import React from 'react';

import YupsLogoOrange from '../../UI/Assets/YupsLogoOrange.png'
import './navbar.css'

// import YupsLogoOrange from '../UI/Assests/White-Symbol-Orange-Dot-Transparent.png'

export const Navbar = () => {
    return (
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="#home">
                    <img
                        src={YupsLogoOrange}
                        height="35"
                        alt="yups Logo"
                        loading="lazy"
                        className='img-logo-nav'
                    />
                </a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    )
}
