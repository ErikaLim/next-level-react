import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export default class WaitList extends Component {
    state = {
        name: '',
        childrenName: '',
        age: '',
        email: '',
        phone: '',
        startDate: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    render(){
        return (
            <div className="wait-list-form">
                <form action="">
                    <TextField 
                        id="name"
                        label="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                    />
                    <TextField 
                        id="childrenName"
                        label="Child's Name"
                        value={this.state.childrenName}
                        onChange={this.handleChange('childrenName')}
                    />

                </form>
            </div>
        )
    }
}