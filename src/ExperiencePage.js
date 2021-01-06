import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card/Card";
import data from './Data.json';
import Line from "./Line";
import {ParallaxBanner} from "react-scroll-parallax";

const pub = process.env.PUBLIC_URL;
class ExperiencePage extends Component {
    render() {
        const experiences = [];  // the names
        for(let k in data["Experience"]){
            let p = data["Experience"][k]["priority"]
            experiences[p] = <Card type={"Experience"} name={k}/>
        }
        return (
            <div>
                <ParallaxBanner className='ParallaxBanner'
                                layers={[
                                    {
                                        image: pub + '/img/experiences.jpg',
                                        amount: 0.7,
                                    },
                                ]}>
                    <div className='Banner'>
                        <h1>EXPERIENCES</h1>
                    </div>
                </ParallaxBanner>
                {experiences}
            </div>
        );
    }
}

export default ExperiencePage;
