
import React, { Component } from 'react';
class Line extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <svg height="210" width="500">
                    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:10" />
                </svg>
            </div>
        );
    }
}

export default Line;