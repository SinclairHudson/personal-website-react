import React, {Component} from 'react';
import './App.css';
import Opener from "./Opener";
import Card from "./Card";
import NavButton from "./NavButton";
import Footer from "./Footer";
import Project from "./Project";
import Experience from "./Experience";
import ProjectPage from "./ProjectPage";
import ExperiencePage from "./ExperiencePage";
import Contact from "./Contact";
import {ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { Document, Page, pdfjs} from 'react-pdf';
import resume from './Resume Jan 2019.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


import ScrollToTop from "./ScrollToTop";

const pub = process.env.PUBLIC_URL;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <ParallaxProvider>
                <div className="App">
                    {/*<img src={pub + "/img/svg/verticalline.svg"} alt={"line"}*/}
                    {/*     style={{*/}
                    {/*         zIndex: -1, position: 'absolute',*/}
                    {/*         top: this.state.offset * 0.9,*/}
                    {/*         left: '17%'*/}
                    {/*     }}/>*/}
                    {/*<img src={pub + "/img/svg/verticalline.svg"} alt={"line"}*/}
                    {/*     style={{*/}
                    {/*         zIndex: -1, position: 'absolute',*/}
                    {/*         top: this.state.offset * -1.2,*/}
                    {/*         left: '83%'*/}
                    {/*     }}/>*/}
                    {/*<img src={pub + "/img/svg/verticalline.svg"} alt={"line"}*/}
                    {/*     style={{*/}
                    {/*         zIndex: -1, position: 'absolute',*/}
                    {/*         top: this.state.offset / 3 + 100,*/}
                    {/*         left: 200*/}
                    {/*     }}/>*/}
                    {/*<img src={pub + "/img/svg/verticalline.svg"} alt={"line"}*/}
                    {/*     style={{*/}
                    {/*         zIndex: -1, position: 'absolute',*/}
                    {/*         top: this.state.offset / 4 + 800,*/}
                    {/*         left: 1200*/}
                    {/*     }}/>*/}
                    {/*<img src={pub + "/img/svg/horizontalline.svg"} alt={"line"}*/}
                    {/*     style={{*/}
                    {/*         zIndex: -1, position: 'absolute',*/}
                    {/*         top: '30%',*/}
                    {/*     }}/>*/}
                    <Router onUpdate={() => window.scrollTo(0, 0)}>
                        <ScrollToTop> {/*Added because router preserves scroll position*/}
                            <div className="NavBar">
                                {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                                <Link to={'/'}>
                                    <div className="NavButton">
                                        Home
                                    </div>
                                </Link>
                                <NavButton location="Projects"/>
                                <NavButton location="Experiences"/>
                                <NavButton location="Contact"/>
                                <NavButton location="Resume"/>
                            </div>
                            {/*end of NavBar*/}
                            <Switch>
                                <Route path='/projects' component={ProjectPage}/>
                                <Route path='/experiences' component={ExperiencePage}/>
                                <Route exact path='/' render={() => (
                                    <div>
                                        <Opener/>
                                        <Card type={"Project"} name={"ajax"}/>
                                        <Card type={"Experience"} name={"watonomous"}/>
                                    </div>
                                )}/>
                                <Route path='/project/:projectId'
                                       render={({match}) => {
                                           return (
                                               <Project
                                                   id={match.params.projectId}
                                               />
                                           );
                                       }}
                                />
                                <Route path='/experience/:experienceId'
                                       render={({match}) => {
                                           return (
                                               <Experience
                                                   id={match.params.experienceId}
                                               />
                                           );
                                       }}/>
                                <Route path='/contact' component={Contact}/>
                                {/*default if something goes wrong */}
                                <Route render={({location}) => (
                                    <div>
                                        <h3>
                                            Error! No matches for <code>{location.pathname}</code>
                                        </h3>
                                    </div>
                                )}/>
                            </Switch>
                        </ScrollToTop>
                    </Router>
                    <Footer/>
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
