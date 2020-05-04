import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Stats extends Component {
    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    <ReactGithubCalendar name="SinclairHudson"/>*/}
                {/*</div>*/}
                <div className="stat">
                    <h1>7</h1>
                    Hackathons attended
                </div>
                <div className="stat">
                    <h1>1</h1>
                    Completed Coop Terms
                </div>
                <div className="stat">
                    <h1>175+</h1>
                    GitHub contributions this year
                </div>
            </div>
        );
    }
}

export default Stats;