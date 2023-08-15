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
        let experience_list = Object.values(data.Experience)

        experience_list.sort((a, b) => (a.priority < b.priority) ? 1 : -1)

        let experience_cards = []
        for (let experience of experience_list) {
            experience_cards.push(<Card type="Experience" name={experience.name}/>)
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
                {experience_cards}
            </div>
        );
    }
}

export default ExperiencePage;
