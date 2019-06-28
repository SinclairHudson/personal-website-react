import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import data from './cards.json';
import Line from "./Line";
import {ParallaxBanner} from "react-scroll-parallax";

const pub = process.env.PUBLIC_URL;
class ExperiencePage extends Component {
    render() {
        const expList = [];
        for (let k in data["Experience"]) {
            expList.push(
                <Card type={"Experience"} name={k}/>
            );
        }
        return (
            <div>
                <ParallaxBanner style={{height: '500px'}}
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
                {expList}
            </div>
        );
    }
}

export default ExperiencePage;