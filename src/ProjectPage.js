import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card/Card";
import data from './Data.json';
import Line from "./Line";
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
const pub = process.env.PUBLIC_URL;

class ProjectPage extends Component {
    render() {
        const projectList = [];
        for (let k in data["Project"]) {
            projectList.push(
                <Card type={"Project"} name={k}/>
            );
        }
        return (
            <div>
                <ParallaxBanner style={{height: '500px'}}
                                layers={[
                                    {
                                        image: pub + '/img/circuit.jpg',
                                        amount: 0.7,
                                    },
                                ]}>
                    <div className='Banner'>
                        <h1>PROJECTS</h1>
                    </div>
                </ParallaxBanner>
                {projectList}
            </div>
        );
    }
}

export default ProjectPage;