import React, { Component } from 'react';
import UserContextAPI from '../context/user-context';

class ChildUserTemplateContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            canEdit: false
        }
    }

    componentDidMount() {
        let value = this.context;
        this.setState(value)
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitValue() {
        const info = {
            name: this.state.name
        }
        this.context.listernSubChild(info)
    }

    render() {
        return (
            <UserContextAPI.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h4>Current user state - Sub Child</h4>
                            <span>User Name : {context.name}</span>
                            <br></br>
                            <h4>Send value to Parent</h4>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleInput.bind(this)} />
                            <br></br>
                            <button className="button" onClick={() => this.submitValue()}>Update</button>
                        </div>
                    )
                }}
            </UserContextAPI.Consumer>

        );
    }
}

ChildUserTemplateContext.contextType = UserContextAPI;

export default ChildUserTemplateContext;