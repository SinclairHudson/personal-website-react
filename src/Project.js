import React, {Component, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data.json';

const pub = process.env.PUBLIC_URL;
import ImageGallery from './ImageGallery.js'
import ParaPicture from "./ParaPicture";
import Opener from "./Opener";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: null,
            viewerOpen: false,
            title: "AJAX Voice Recognition",
            dateStart: "Sept 2018",
            dataEnd: "Feb 2019",
            blurb: "Voice Recognition system built with Google Tensorflow.",
            img: "0.jpg",
            tags: [
                "TensorFlow",
                "NLP",
                "NumPy",
                "Tensorboard",
                "Keras",
                "LSTM"
            ],
            gallery:[
                "0.jpg"
            ],
            video: null,
            url: "/project/ajax",
            intro: "This is my longest ongoing project, which all started with a frustration with a horrible voice recognition library. I decided to give it a shot myself, using Google TensorFlow Maching Learning. Currently, I have some parts working with a sub-optimal accuracy, and I'm looking into different models and methods to achieve great voice recognition. You can find all my code on my GitHub, right here.",
            learned: [
                "Implementing and testing sequence classification neural networks",
                "Google Tensorflow, NumPy, Pyaudio, and many other small libraries",
                "Patience",
                "A Research, Build, Test cycle to complete a project"
            ],
            howItWorks: "Currently, I've only trained a word classifier working, capable at differentiating 18 different words apart, with about 92% accuracy. The idea was to determine where the word breaks were, partition the sound file into words, and then classify from there. However, with a low classification accuracy, I'm currently looking into a new approach, using a sequence to sequence LSTM network to turn the sound byte into phenomes first. The good news is that I already have the data; I wrote a python script that automatically labels and records my voice, making data collection easy."
        };
    }

    componentDidMount() {
        this.setState(data.Project[this.props.id]);
        let arr = data.Project[this.props.id].gallery;
        let newArr = arr.map((img)=>{
            return {
                width: img.width,
                height: img.height,
                src: pub +'/img/'+this.props.id+"/"+img.src
            };
        });
        this.setState({gallery: newArr});
    }
    randomProjects(){
        let keys = Object.keys(data);
        let proj = keys[Math.floor(Math.random()*keys.length)];
        //TODO

    }
    render() {

        let videoElement = null;
        if(this.state.video){
            videoElement = <div><h2>Video:</h2><div className={"vid-container"}>
                <iframe className="resp-iframe" src={this.state.video} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/></div></div>;
        }
        return (
            <div>
                <div>
                    <h2>Project:</h2>
                    <h1>{this.state.title.toUpperCase()}</h1>
                    <ParaPicture img={pub +'/img/'+this.props.id+"/"+this.state.img} para={this.state.intro}/>
                </div>
                <div>
                    <h2>How it Works:</h2>
                    {this.state.howItWorks}
                </div>
                <div>
                    <h2>What I learned:</h2>
                    <ul>
                    {this.state.learned.map((item) => {
                        return (<li>{item}</li>);
                    })}
                    </ul>
                </div>
                {videoElement}
                <div>
                    <h2>Pictures:</h2>
                    <Gallery
                        photos={this.state.gallery}
                        direction={"column"}
                        onClick={() => {this.setState({viewerOpen: true});}}
                    />
                </div>
                <div>
                    <h2>More Projects: </h2>
                    {this.randomProjects()}
                </div>
            </div>
        );
    }
}

export default Project;