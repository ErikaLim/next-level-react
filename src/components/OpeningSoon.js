import React, { Component } from 'react'
import openImg from '../images/opening-soon.jpg'

export default class OpeningSoon extends Component {
    render(){
        return (
            <div className="opening-soon">
                <img src={openImg} alt=""/>
            </div>
        )
    }
}