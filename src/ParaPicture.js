import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Overlap from './Overlap/Overlap';
import {ParallaxBanner} from "react-scroll-parallax";

const pub = process.env.PUBLIC_URL;

class ParaPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: pub + "/img/myface.jpg",
            text: "Default Paragraph. Lorum Ipsum.",
            offset: 15
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(event) {
        this.setState({
            offset: window.pageYOffset
        });

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className={"ParaPicture"}>
                <div className={"Image"}>
                    <img src={pub + "/img/svg/Yellow_icon.svg"} alt={"yellow circle"}
                         style={{zIndex: -1, position: 'absolute', width: "100%",
                             top: 50 * Math.sin(this.state.offset/400 + 4.2) - 15,
                             left: 50 * Math.sin(this.state.offset/500 + 4.7) - 15
                         }}/>
                    <img src={pub + "/img/svg/outline.svg"} alt={"circle outline"}
                         style={{zIndex: -1, position: 'absolute', width: "100%",
                             top: -50 * Math.sin(this.state.offset/500) + 15,
                             left: 50 * Math.sin(this.state.offset/500) - 15
                         }}/>

                    {/*The actual image*/}
                    <img src={this.props.img} alt={"image"}
                         className={"Parallax"}/>
                </div>
                <div className={"Text"}>
                    {this.props.para}
                </div>
            </div>
        );
    }
}

export default ParaPicture;