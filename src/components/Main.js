import React from 'react';
import './css/Header.css';
import Header from "./Header";

function Main() {
    return (
        <body>
            <div className="main">

                <Header/>


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