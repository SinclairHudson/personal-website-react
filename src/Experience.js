import React, {Component} from 'react';
import './App.css';
import data from './Data.json';
import ParaPicture from "./ParaPicture/ParaPicture";
import Gallery from "react-photo-gallery";
import Card from "./Card/Card";

const pub = process.env.PUBLIC_URL;


class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: null,
            viewerOpen: false,
            title: "This is a Title",
            dateStart: "August 2000",
            dataEnd: "Present",
            blurb: "BlurbBlurb",
            img: "0.jpg",
            tags: [
                "Tag0",
                "Tag1",
                "Tag2",
            ],
            gallery: [
                "0.jpg"
            ],
            video: null,
            url: "/experience/watonomous",
            intro: "Intro",
            learned: [
                "Learned0",
                "Learned1",
                "Learned2"
            ],
            custom: [],
            recommended: []
        };
    }

    componentDidMount() {
        console.log("bravo");

        this.setState(data.Experience[this.props.id]);
        let arr = data.Experience[this.props.id].gallery;
        let newArr = arr.map((img) => {
            return {
                width: img.width,
                height: img.height,
                src: pub + '/img/' + this.props.id + "/" + img.src
            };
        });
        this.setState({gallery: newArr});
        this.randomExperiences(this.props.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.id !== nextProps.id) {
            console.log(nextProps.id);
            this.randomExperiences(nextProps.id);
            this.setState(data.Experience[nextProps.id]);
            let arr = data.Experience[nextProps.id].gallery;
            let newArr = arr.map((img) => {
                return {
                    width: img.width,
                    height: img.height,
                    src: pub + '/img/' + nextProps.id + "/" + img.src
                };
            });
            this.setState({gallery: newArr});

        }
    }

    generateCustoms() {
        if (this.state.custom.length === 0) {
            return null;
        } else {
            return this.state.custom.map((item) => {
                return (<div>
                    <h2>{item.header}</h2>
                    <div>{item.body}</div>
                </div>);
            })
        }

    }

    randomExperiences(exclude) {
        let rec = [];
        let keys = Object.keys(data["Experience"]);
        let index = keys.indexOf(exclude);
        if (index > -1) {
            keys.splice(index, 1);
        }
        //remove the current project so it's not selected as a recommended project
        for (let i = 0; i < 3; i++) {
            let proj = keys[Math.floor(Math.random() * keys.length)];
            rec.push(<Card type={"Experience"} name={proj} key={i}/>);
            let index = keys.indexOf(proj);
            if (index > -1) {
                keys.splice(index, 1);
            }
        }
        this.setState({recommended: rec});
    }

    render() {
        let videoElement = null;
        let fontsize = {fontSize: "5.6vw"};
        if(this.state.title.length > 12){
            fontsize = {fontSize: "4vw", marginTop: "0vw"};
        }
        if (this.state.video) {
            videoElement = <div><h2>Video:</h2>
                <div className={"vid-container"}>
                    <iframe className="resp-iframe" src={this.state.video} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>;
        }

        return (
            <div>
                <div>
                    <h2>Experience:</h2>
                    <h1 style={fontsize}>{this.state.title.toUpperCase()}</h1>
                    <ParaPicture img={pub + '/img/' + this.props.id + "/" + this.state.img} para={this.state.intro}/>
                </div>
                {this.generateCustoms()}
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
                        onClick={() => {
                            this.setState({viewerOpen: true});
                        }}
                    />
                </div>
                <div>
                    <h2>More Experiences: </h2>
                    {this.state.recommended}
                </div>
            </div>
        );
    }
}

export default Experience;
