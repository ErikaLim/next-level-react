import React, { Component } from 'react'
import logo from '../images/next-level-logo.jpg'

export default class Header extends Component {
    render(){
        return (
            <div className="next-logo">
                <img src={logo} alt=""/>
            </div>
        );
    }
}