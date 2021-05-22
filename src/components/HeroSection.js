import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='../videos/video-2.mp4' autoPlay loop muted />
            <h1>Hello everyone</h1>
            <p>Welcome to GameAppex.com by Rashika</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Trailer <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
