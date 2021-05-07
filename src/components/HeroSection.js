import React from 'react';
import Button from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <img src={process.env.PUBLIC_URL + "/images/img-home.jpg"} alt="Travel" />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">시작하기</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">트레일러 보기<i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection;