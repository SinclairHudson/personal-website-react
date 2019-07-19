import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data.json';

const pub = process.env.PUBLIC_URL;
import ImageGallery from './ImageGallery.js'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Default Title",
            dateStart: "Sept 2023",
            dataEnd: "Never",
            blurb: "This is the default when a card element doesn't have a correct property to direct it to a project or an experience.",
            img: "default.jpg",
            tags: ["alpha", "bravo", "charlie"]
        };
    }

    componentDidMount() {
        this.setState(data.Project[this.props.id])
    }

    render() {
        return (
            <div>
                <div className="Intro">
                    <h1>{this.state.title.toUpperCase()}</h1>
                </div>
                {/*<ImageGallery id={this.props.id}/>*/}
            </div>
        );
    }
}

export default Project;