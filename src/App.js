import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Opener from "./Opener";
import Card from "./Card";
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group'
import NavButton from "./NavButton";
import Footer from "./Footer";
import Project from "./Project";
import Experience from "./Experience";
import ProjectPage from "./ProjectPage"
import Line from "./Line"
import ExperiencePage from "./ExperiencePage"
import {Background, Parallax} from 'react-parallax';
import {ParallaxProvider} from 'react-scroll-parallax';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch, withRouter
} from 'react-router-dom';

const pub = process.env.PUBLIC_URL;

import createHistory from 'history/createBrowserHistory';
import {createBrowserHistory} from "history";
import ScrollToTop from "./ScrollToTop";

const history = createHistory();

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
                    {/*         left: Math.min(this.state.offset * 2 + 200)*/}
                    {/*     }}/>*/}
                    <Router onUpdate={() => window.scrollTo(0, 0)}>
                        <ScrollToTop> {/*Added because router preserves scroll position*/}
                            <div className="NavBar">
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
