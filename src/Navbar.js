import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavButton from "./NavButton";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 1240;
        if(isMobile) {
            return (
                <div className="NavBar">
                    {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                    <NavButton location="Home"/>
                    <NavButton location="Projects"/>
                    <NavButton location="Experiences"/>
                    <NavButton location="Contact"/>
                    <NavButton location="Resume"/>
                </div>
            );
        }
        else{
            return (
                <div className="NavBar">
                    {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                    <NavButton location="Home"/>
                    <NavButton location="Projects"/>
                    <NavButton location="Experiences"/>
                    <NavButton location="Contact"/>
                    <NavButton location="Resume"/>
                </div>
            );
        }
    }
}

export default Navbar;