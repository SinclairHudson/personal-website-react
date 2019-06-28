import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const pub = process.env.PUBLIC_URL;

class Project extends Component {
    render() {
        return (
            <div className="Intro">
                <h2>Hello! I'm</h2>
                <h1>SINCLAIR HUDSON</h1>
            </div>
        );
    }
}

export default Project;