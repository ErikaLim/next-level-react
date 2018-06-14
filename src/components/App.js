import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Header from './Header';
import TopMenu from './TopMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="grid-x grid-padding-x align-center">
            <Header />  
          </div>
          <TopMenu />
        </div>
      </div>
    );
  }
}

export default App;
