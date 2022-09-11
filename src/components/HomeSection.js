import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HomeSection.css';

function HomeSection() {
    return (
        <div className='home-container'>
            <h1>Jeffrey Peng</h1>
            <p>Software Developer</p>
            <img src='images/mejeffpeng.jpg' alt='My face' />
            {/*<div className= "hero-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'>GET STARTED</Button>
                <Button className = 'btns' buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'>Watch Trailer <i className ='far-fa-play-circle'/></Button>
            </div>*/}
        </div>
    )
}

export default HomeSection
