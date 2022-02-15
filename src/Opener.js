import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";
import ParaPicture from './ParaPicture/ParaPicture'
const pub = process.env.PUBLIC_URL;


class Opener extends Component {
    render() {
        let Opener= "Hello! My name is Sinclair, and I'm currently attending the University of Waterloo for Computer Science." +
            " This website serves as my online portfolio, including my projects and  work experience." +
            " Currently, I'm looking for my final coop placement, in the Fall 2022 term." +
            " After that, I'll be looking for a full-time job, since I'm graduating in May 2023." +
            " Hit me up if you have an opportunity, my contact info can be found under the 'Contact' tab";
        return (
            <div>
                        <h2>Hello! I'm</h2>
                        <h1>SINCLAIR HUDSON</h1>
                <ParaPicture img={pub +'/img/myface.jpg'} para={Opener}/>
            </div>
        );
    }
}

export default Opener;
