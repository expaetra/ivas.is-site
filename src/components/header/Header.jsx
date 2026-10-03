import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle logo click and navigate to home
    const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    navigate('/'); // Navigate programmatically
};

    // Function to handle navigation clicks and update the active link
    const handleNavClick = (sectionId) => {
        navigate(`/#${sectionId}`); // Use navigate to go to the specific section
    };

    return (
        <header className='header'>
            <nav className="nav container">
                {/* Logo that navigates to the Home Page */}
                <a href="#" className="nav_logo" onClick={handleLogoClick}>
                    P I
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className="nav__item">
                            <a
                                href="#home"
                                className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`}
                                onClick={() => handleNavClick('home')} // Use the handler
                            >
                                <i className='bx bx-home-alt nav__icon'></i> home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#projects"
                                className={`nav__link ${activeLink === 'projects' ? 'active-link' : ''}`}
                                onClick={() => handleNavClick('projects')} // Use the handler
                            >
                                <i className='bx bx-code-alt nav__icon'></i> projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#skills"
                                className={`nav__link ${activeLink === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleNavClick('skills')} // Use the handler
                            >
                                <i className='bx bx-wrench nav__icon'></i> skills
                            </a>
                        </li>
                    </ul>
                    <i className="fa-solid fa-xmark nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
