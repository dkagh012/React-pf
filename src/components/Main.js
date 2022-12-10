import React from 'react';
import { Link } from "react-router-dom";
import './Main.css';
import { FaBars, FaTimes } from "react-icons/fa";
import{useState} from "react";
function Main() {
    const [click ,setClick] =useState(false);
    const handleClick = () => setClick(!click);

    return (
        <body>
            <div className="main">
                <div className="main-header">
                    <ul className={click ? "nav-menu active main-test":"nav-menu "}>
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




                <div className="main_container">
                    <div className="main_center"> P O R T F O L I O </div>

                    <div className="main_name">
                        <p>배정태</p>
                        <p>2022.12.10</p>
                    </div>
                </div>
            </div>


        </body>
    );
}

export default Main;