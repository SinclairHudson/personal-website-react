import React, {Component} from 'react';
import './App.css';
import data from './Data.json';
import ParaPicture from "./ParaPicture";
import Gallery from "react-photo-gallery";
import Card from "./Card";

const pub = process.env.PUBLIC_URL;


class Project extends Component {
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
            url: "/project/ajax",
            intro: "Intro",
            learned: [
                "Learned0",
                "Learned1",
                "Learned2"
            ],
            howItWorks: "How It Works",
            recommended:[]
        };
    }

    componentDidMount() {
        this.setState(data.Project[this.props.id]);
        let arr = data.Project[this.props.id].gallery;
        let newArr = arr.map((img) => {
            return {
                width: img.width,
                height: img.height,
                src: pub + '/img/' + this.props.id + "/" + img.src
            };
        });
        this.setState({gallery: newArr, recommended: this.randomProjects()});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.id !== nextProps.id){
            this.setState(data.Project[nextProps.id]);
            let arr = data.Project[nextProps.id].gallery;
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

    randomProjects() {
        let rec = [];
        let keys = Object.keys(data["Project"]);
        let index = keys.indexOf(this.props.id);
        if (index > -1) {
            keys.splice(index, 1);
        }
        //remove the current project so it's not selected as a recommended project
        for (let i = 0; i < 3; i++) {
            let proj = keys[Math.floor(Math.random() * keys.length)];
            rec.push(<Card type={"Project"} name={proj} key={i}/>);
            let index = keys.indexOf(proj);
            if (index > -1) {
                keys.splice(index, 1);
            }
        }
        return(rec);
    }

    render() {
        let videoElement = null;
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
                    <h2>Project:</h2>
                    <h1>{this.state.title.toUpperCase()}</h1>
                    <ParaPicture img={pub + '/img/' + this.props.id + "/" + this.state.img} para={this.state.intro}/>
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
                        onClick={() => {
                            this.setState({viewerOpen: true});
                        }}
                    />
                </div>
                <div>
                    <h2>More Projects: </h2>
                    {this.state.recommended}
                </div>
            </div>
        );
    }
}

export default Project;