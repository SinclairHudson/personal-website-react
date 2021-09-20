import React, {Component} from 'react';
import './App.css';
import Opener from "./Opener";
import Card from "./Card/Card";
import Footer from "./Footer";
import Project from "./Project";
import Experience from "./Experience";
import ProjectPage from "./ProjectPage";
import ExperiencePage from "./ExperiencePage";
import Contact from "./Contact";
import {ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Stats from "./Stats/Stats";


import ScrollToTop from "./ScrollToTop";
import Navbar from "./NavBar/Navbar";
// import styles from 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Router onUpdate={() => window.scrollTo(0, 0)}>
                        <ScrollToTop> {/*Added because router preserves scroll position*/}
                        <Navbar/>
                            {/*end of NavBar*/}
                            <Switch>
                                <Route path='/projects' component={ProjectPage}/>
                                <Route path='/experiences' component={ExperiencePage}/>
                                <Route exact path='/' render={() => (
                                    <div>
                                        <Opener/>
                                        {/*<Stats/>*/}
                                        <Card type={"Experience"} name={"darwin"}/>
                                        <Card type={"Project"} name={"cansofcom"}/>
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
