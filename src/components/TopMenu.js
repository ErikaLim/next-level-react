import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: { 
    primary: { main: "#01ab99"},
    secondary: { main: "#4a4a4a" }
  }

})

export default class TopMenu extends Component {
    state = {
      value: 0,
    }

    render(){
        return <div className="top-menu">
          <MuiThemeProvider theme={theme}>
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
            >
              <Tab label="About" />
              <Tab label="Our Program" />
              <Tab label="Location" />
              <Tab label="Contact" />
            </Tabs>
          </MuiThemeProvider>
          </div>;
    }
}