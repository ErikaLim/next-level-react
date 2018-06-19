import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import TopMenu from './TopMenu'
import OpeningSoon from './OpeningSoon';
import About from './About'
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return <Router>
        <div className="App">
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
                  <Route exact path="/" component={OpeningSoon} />
                  <Route exact path="/About" component={About} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Router>;
  }
}

export default App;
