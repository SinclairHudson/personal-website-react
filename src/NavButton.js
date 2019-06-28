import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

class NavButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Link to={'/' + this.props.location.toLowerCase()}>
                <div className="NavButton">
                    {this.props.location}
                </div>
            </Link>
        );
    }
}

export default NavButton;