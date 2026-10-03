import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">© 2026 Petra Ivas. All rights reserved.</p>

                <p className="footer__credit">
                    Designed & built by <a href="https://github.com/expaetra" target="_blank" rel="noopener noreferrer">Petra Ivas</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
