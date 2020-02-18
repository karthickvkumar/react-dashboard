import React, { Component } from 'react';
import UserContextAPI from '../context/user-context';
import UserTemplateContext from './user-template-context';

class UserContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mr.A',
            designation: 'UI Developer',
            age: 24,
            status: true,
            address: {
                flatno: 12,
                area: 'xyz',
                city: 'chennai'
            },
            language: ['tamil', 'english'],
            onload() {
                //code block
            },
            color: 'red'

        }
    }

    updateInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateEmployee(data) {
        console.info(data);
        this.setState({
            name: data.name,
        })
    }

    render() {
        return (
            <UserContextAPI.Provider value={{ ...this.state, listernSubChild: this.updateEmployee.bind(this) }}>
                <h4>Current user state - Parent</h4>
                <input type="text" name="name" value={this.state.name} onChange={this.updateInput.bind(this)} />
                <br></br>
                <input type="text" name="designation" value={this.state.designation} onChange={this.updateInput.bind(this)} />
                <br></br>
                <UserTemplateContext></UserTemplateContext>
            </UserContextAPI.Provider>
        );
    }
}

export default UserContext;