import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './css/Main.css';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div id="header">
            <div className="main-header">
                <ul className={click ? "nav-menu active main-test" : "nav-menu "}>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={50} style={{ color: "#fff" }} />
                    ) : (

                        <FaBars size={50} style={{ color: "#fff" }} />
                    )}

                </div>
            </div>
        </div>

    );
}
export default Header;