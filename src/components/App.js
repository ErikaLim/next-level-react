import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import TopMenu from './TopMenu'
import OpeningSoon from './OpeningSoon';

class App extends Component {
  render() {
    return <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={8} justify="center">
                <TopMenu />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <OpeningSoon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>;
  }
}

export default App;
