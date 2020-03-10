import React, {Component} from 'react';
import data from '../Data.json';
import Fade from 'react-reveal';
import './Card.css';
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
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState(data[nextProps.type][nextProps.name]);
    }

    wrapTags(){
        if (window.innerWidth < 1441) {
            return null
        }
        else {
            return (
                <div className={"Tags"}>{this.generateTags()}</div>
            );
        }
    }
    generateTags() {
        if (window.innerWidth < 1441) {
            return null
        }
        else {
            return ((this.state.tags).map((tag) => (
                    <div className={"Tag"}>
                        {tag}
                    </div>
                ))
            );
        }
    }

    render() {
        return (
            <Fade bottom>
                <Link to={"/"+ this.props.type.toLowerCase()+"/" + this.props.name}>
                    <div className="Card">
                        <div className={"Text"}>
                            <h2>{this.props.type}</h2>
                            <h1>{this.state.title}</h1>
                            <p>
                                {this.state.blurb}
                            </p>
                            {this.wrapTags()}
                        </div>
                        <div className={"Image"}>
                            <img src={pub + '/img/' + this.props.name + '/' + this.state.img} alt={this.state.name}/>
                        </div>
                    </div>
                </Link>
            </Fade>
        );
    }
}

export default Card;