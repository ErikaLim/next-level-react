import React, { Component } from 'react'
import logo from '../images/next-level-logo.jpg'

export default class Header extends Component {
    render(){
        return <div className="next-logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>;
    }
}