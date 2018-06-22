import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';


const theme = createMuiTheme({
  palette: { 
    primary: { main: "#01ab99"},
    secondary: { main: "#4a4a4a" }
  }

})

export default class TopMenu extends Component {
    state = {
      value: 0,
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render(){
        return <div className="top-menu">
          <MuiThemeProvider theme={theme}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              index={this.state.value}
            >
              <Tab label="Home" component={Link} to='/'/>
              <Tab label="About" component={Link} to='/About'/>
              <Tab label="Our Program" component={Link} to='/Program' />
              <Tab label="Location" component={Link} to='/Location'/>
            </Tabs>
          </MuiThemeProvider>
          </div>;
    }
}