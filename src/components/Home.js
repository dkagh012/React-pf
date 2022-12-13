import React from 'react';
import './css/Home.css';
import me from './images/배정태.png';
import meimg from './images/blue.png';

import pdf from './pdf/배정태 포트폴리오.pdf';
function Home() {
    return (
        <body>
            <div className="home">
                <div className="home-page">
                    <div className="home-name">
                        <p>안녕하세요</p>
                        <p>프론트엔드 개발자</p>
                        <p className="home-name-l">배정태입니다.</p>
                    </div>



                    <div className="home-sns">
                        <p className="home-sns-l">방문해 주셔서 감사합니다.</p>
                        <div class="icon">
                            <a class="facebook" href="https://www.facebook.com/profile.php?id=100004531120609">icons</a>
                            <a class="git" href="https://github.com/dkagh012">icons</a>
                            <a class="instargram" href="https://www.instagram.com/jungtae0421/">icons</a>
                        </div>

                    </div>

                </div>

                <div className="home-img">
                    <img src={me} alt="My Image" />
                    <div class="home-download"><a href={pdf} download>이력서.pdf</a></div>
                </div>
               





                <nav class="menu-all" role="navigation">
                    <div id="menuToggle">
                        
                        <input type="checkbox" />

                        <a class="menu-me">소개</a>
                        <span></span>


                        <ul id="menu">
                            <div class="menu-name">
                                <h1>최고의 프론트 엔드 개발자</h1>
                                <p>이름: 배정태</p>
                                <p>나이: 25살</p>
                                <p>대학교: 안동대학교(컴퓨터공학과)</p>
                                <p>취미: 운동,영화보기</p>
                            </div>

                            <div className="menu-img">
                                <img src={meimg} alt="My Image" />
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>





        </body>
    );
}

export default Home;