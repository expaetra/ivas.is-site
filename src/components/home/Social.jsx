import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://github.com/expaetra"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className='bx bxl-github' ></i>
            </a>

            
            <a
                href="https://www.linkedin.com/in/petra-ivas/"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className='bx bxl-linkedin' ></i>
            </a>

            <a
                href="mailto:petra@ivas.is"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className='bx bx-envelope' ></i>
            </a>
        </div>
    );
}

export default Social;
