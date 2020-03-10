import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./NavBar/Navbar";
import Opener from "./Opener";
import Card from "./Card/Card";
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group'
import NavButton from "./NavBar/NavButton";
import Footer from "./Footer";
import Project from "./Project";
import Experience from "./Experience";
import ProjectPage from "./ProjectPage"
import Line from "./Line"
import ExperiencePage from "./ExperiencePage"
import { Background ,Parallax} from 'react-parallax';
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

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);