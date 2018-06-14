import React, { Component } from 'react';

export default class TopMenu extends Component {
    render(){
        return(
            <div className="top-menu">
                <ul className="menu expanded">
                    <li><a>About</a></li>
                    <li><a>Our Program</a></li>
                    <li><a>Our Location</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
        );
    }
}