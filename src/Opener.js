import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";
import ParaPicture from './ParaPicture/ParaPicture'
const pub = process.env.PUBLIC_URL;


class Opener extends Component {
    render() {
        let Opener= "Hello! My name is Sinclair, and I'm currently attending the University of Waterloo for" +
            " Computer Science. I love learning new things, creating cool projects, and solving problems." +
            " This website serves as my online portfolio, including my projects, work experience, and events" +
            " that I have attended. Take a look around, and don't hesitate to contact me!";
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