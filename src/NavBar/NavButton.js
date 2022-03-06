import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';
import resume from './Resume-2021-09-19.pdf'

class NavButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.location === "Home"){
            return(
                <NavLink to={'/'}>
                    <div className="NavButton">
                        {this.props.location}
                    </div>
                </NavLink>);
        }
        if(this.props.location === "Resume"){
            return(
                <a href={resume}>
                    <div className="NavButton">
                        {this.props.location}
                    </div>
                </a>);
        }
        return (
            <NavLink to={'/' + this.props.location.toLowerCase()} activeClassName={'active'}>
                <div className="NavButton">
                    {this.props.location}
                </div>
            </NavLink>
        );
    }
}

export default NavButton;
