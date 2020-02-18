import React, { Component } from 'react';
import UserTemplate from './user-template';

class User extends Component {
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

    // changeColor() {
    //     this.setState({
    //         color: 'blue'
    //     })
    //     this.refs.headerElement.style.color = 'green'
    // }

    updateEmployee(data) {
        console.info(data);
        this.setState({
            name: data.name,
            designation: data.job
        })
    }

    render() {
        const styleElement = {
            color: this.state.color
        }
        return (
            <div>
                {/* <h3 style={styleElement} ref="headerElement">User Component</h3>
                <button onClick={() => this.changeColor()}>Click to Change</button> */}
                <h4>Current user state - Parent</h4>
                <input type="text" name="name" value={this.state.name} onChange={this.updateInput.bind(this)} />
                <br></br>
                <input type="text" name="designation" value={this.state.designation} onChange={this.updateInput.bind(this)} />
                <br></br>
                <UserTemplate {...this.state} listenChild={this.updateEmployee.bind(this)} />
            </div>
        );
    }
}

export default User;