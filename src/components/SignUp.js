import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default class SignUp extends Component {
    render(){
        return <div className="sign-up">
            <Grid container justify="center">
              <h1 className="title">Opening Soon</h1>
            </Grid>
            <Grid container justify="center">
              <div className="sign-up-text">
                Sign Up for our waitlist now
              </div>
            </Grid>
            <Grid container justify="center">
              <div className="wait-list-button">
                <Button size="large" variant="outlined">
                  Wait List
                </Button>
              </div>
            </Grid>
          </div>;
    }
}