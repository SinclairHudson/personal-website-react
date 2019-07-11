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
import {ParallaxProvider} from 'react-scroll-parallax';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
    render() {
        return (
            <ParallaxProvider>
                <div className="App">
                    <Router>
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
                                   render={({ match }) => {
                                       return (
                                           <Project
                                               id={match.params.projectId}
                                           />
                                       );
                                   }}
                            />
                            <Route path='/experience/:experienceId'
                                   render={({ match }) => {
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
                    </Router>
                    <Footer/>
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
