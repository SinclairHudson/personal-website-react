import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";
import ParaPicture from './ParaPicture';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';

const pub = process.env.PUBLIC_URL;


class Contact extends Component {
    render() {
        let Opener = "Below are various ways you can contact me. I'd say the best way to contact me would be email," +
            " because I check that at least once per day. If you have any questions my projects, university, or anything else," +
            " please send me an email or message me. I want to hear from you. \n \n hudson.sinclair00 at gmail.com";
        return (
            <div>
                <h2>Contact</h2>
                <ParaPicture img={pub + '/img/myface.jpg'} para={Opener}/>
                <div className="row">
                    <div className="social">
                        <a href="https://github.com/SinclairHudson" target="_blank">
                            <img src={pub + "/img/svg/githublogo.svg"}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/people/Sinclair-Hudson/100011751077436" target="_blank">
                            <img src={pub + "/img/svg/facebooklogo.svg"}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.youtube.com/channel/UCk8n3-SC7fYYpLQkT0eYicA" target="_blank">
                            <img src={pub + "/img/svg/youtubelogo.svg"}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/sinclair-h-490002130/" target="_blank">
                            <img src={pub + "/img/svg/linkedinlogo.svg"}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://devpost.com/SinclairHudson" target="_blank">
                            <img src={pub + "/img/svg/devpost.svg"}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;