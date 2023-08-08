import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";
import ParaPicture from './ParaPicture/ParaPicture'
const pub = process.env.PUBLIC_URL;


class Opener extends Component {
    render() {
        let Opener= "Hello! My name is Sinclair, and I'm currently attending the University of Toronto for a Master's of Applied Computing in Artificial Intelligence." +
            " This website serves as my online portfolio, including my projects and  work experience." +
            " Most of my experience is around machine learning for robotics, usually in autonomous vehicles." + 
            " I'm very passionate about machine learning research, solving novel problems." + 
            " Currently, I'm looking for an 8-month research coop placement, starting in May 2024" +
            " Hit me up if you have an opportunity, my contact info can be found under the 'Contact' tab.";
        return (
            <div>
                        <h2>Hello! I'm</h2>
                        <h1>SINCLAIR HUDSON</h1>
                <ParaPicture img={pub +'/img/headshot-Aug-2021.jpg'} para={Opener}/>
            </div>
        );
    }
}

export default Opener;
