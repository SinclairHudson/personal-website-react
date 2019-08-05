import React, {Component} from 'react';
import './App.css';
import data from './Data.json';
import Fade from 'react-reveal';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

const pub = process.env.PUBLIC_URL;

class Card extends Component {
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
        //get the right project information loaded in.
        this.setState(data[this.props.type][this.props.name]);
    }

    generateTags() {
        return ((this.state.tags).map((tag) => (
                <div className={"Tag"}>
                    {tag}
                </div>
            ))
        );
    }

    render() {
        return (
            <Fade bottom>
                <div className="Card">
                    <div className={"Text"}>
                        <h2>{this.props.type}</h2>
                        <h1>{this.state.title}</h1>
                        <p>
                            {this.state.blurb}
                        </p>
                        <div className={"Tags"}>{this.generateTags()}</div>
                        <Link to={"/project/" + this.props.name}>
                            See More
                        </Link>
                    </div>
                    <div className={"Image"}>
                        <img src={pub + '/img/' + this.props.name + '/' + this.state.img} alt={this.state.name}/>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Card;