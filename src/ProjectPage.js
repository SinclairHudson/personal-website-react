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
        let projectList = Object.values(data["Project"])

        projectList.sort((a, b) => (a.priority < b.priority) ? 1 : -1)

        let project_cards = []
        for (let project of projectList) {
            project_cards.push(<Card type="Project" name={project.name}/>)
        }

        return (
            <div>
                <ParallaxBanner className='ParallaxBanner'
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
                {project_cards}
            </div>
        );
    }
}

export default ProjectPage;
