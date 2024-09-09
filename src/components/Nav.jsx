import React, { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg"
const Nav = () => {



    const [activeLink, setActiveLink] = useState('Home');

    const handleClick = (link) => {
        setActiveLink(link);
    };



    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">V2V</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <CgMenuRightAlt />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link pt-1 ${activeLink === 'Home' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleClick('Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link pt-1 ${activeLink === 'Link1' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleClick('Link1')}
                            >
                                ABOUT US
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link pt-1 ${activeLink === 'Link2' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleClick('Link2')}
                            >
                                Instructions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link pt-1 ${activeLink === 'Link3' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleClick('Link3')}
                            >
                                Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link pt-1 ${activeLink === 'Link4' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleClick('Link4')}
                            >
                                Support
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className='' >
                                <button className='startXamBtn'>  START EXAM </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav