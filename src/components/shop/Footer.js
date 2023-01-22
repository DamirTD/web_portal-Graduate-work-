import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
    return (
        <>
        <nav className={'footer-menu'}>
            <div className={'logo-4'}> <h3>RIO</h3> <p>commercial Store</p> </div>
            <ul>
                <li><Link style={{color: '#212529'}} to="/">Home</Link></li>
                <li><Link style={{color: '#212529'}} to="/about">About</Link></li>
                <li><Link style={{color: '#212529'}} to="/blog">Blog</Link></li>
                <li><Link style={{color: '#212529'}} to="/contact">Shop</Link></li>
            </ul>
        </nav>
            <div className={'line-footer'}></div>
            <h4>Graduate Work. Damir Toriya 2023</h4>
        </>
    );
}

export default Footer;
