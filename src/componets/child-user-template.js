import React, { Component } from 'react';

class ChildUserTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.name,
            jobDescription: this.props.designation,
            canEdit: false
        }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onUpdate() {
        this.setState({ canEdit: false });
        const information = {
            name: this.state.userName,
            job: this.state.jobDescription
        }
        this.props.listenSubChild(information);
    }

    render() {
        return (
            <div style={{
                borderStyle: 'dashed',
                height: '300px'
            }}>
                <h4>Current user state - Sub Child</h4>
                {!this.state.canEdit && <span>Name:  {this.state.userName}</span>}
                {this.state.canEdit && <input type="text" name="userName" value={this.state.userName} onChange={this.handleInput.bind(this)}></input>}
                <br></br>
                {!this.state.canEdit && <span>Designation: :  {this.state.jobDescription}</span>}
                {this.state.canEdit && <input type="text" name="jobDescription" value={this.state.jobDescription} onChange={this.handleInput.bind(this)}></input>}
                <br></br>
                {!this.state.canEdit && <button className="button" onClick={() => this.setState({ canEdit: true })}>Edit</button>}
                {this.state.canEdit && <button className="button" onClick={() => this.onUpdate()}>Update</button>}
            </div>
        );
    }
}

export default ChildUserTemplate;