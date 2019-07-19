import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";
const pub = process.env.PUBLIC_URL;

class Opener extends Component {
    render() {
        return (
            <div>
                <ParallaxBanner style={{height: '500px'}}
                                layers={[
                                    {
                                        image: pub + '/img/sailing.jpg',
                                        amount: 0.7,
                                        width: 100
                                    },
                                ]}>
                    <div className='Banner'>
                        <h2>Hello! I'm</h2>
                        <h1>SINCLAIR HUDSON</h1>
                    </div>
                </ParallaxBanner>
                <Overlap />
            </div>
        );
    }
}

export default Opener;