import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import ChildUserTemplate from './child-user-template';

class UserTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.name,
            jobDescription: this.props.designation,
            canEdit: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userName: nextProps.name,
            jobDescription: nextProps.designation,
        });
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
        this.props.listenChild(information);
    }

    setValueforParent(data) {
        this.props.listenChild(data);
    }

    render() {
        return (
            <div>
                <h4>Current user state - Child</h4>
                {!this.state.canEdit && <span>Name:  {this.state.userName}</span>}
                {this.state.canEdit && <input type="text" name="userName" value={this.state.userName} onChange={this.handleInput.bind(this)}></input>}
                <br></br>
                {!this.state.canEdit && <span>Designation: :  {this.state.jobDescription}</span>}
                {this.state.canEdit && <input type="text" name="jobDescription" value={this.state.jobDescription} onChange={this.handleInput.bind(this)}></input>}
                <br></br>
                {!this.state.canEdit && <button className="button" onClick={() => this.setState({ canEdit: true })}>Edit</button>}
                {this.state.canEdit && <button className="button" onClick={() => this.onUpdate()}>Update</button>}
                <br></br>
                <ChildUserTemplate {...this.props} listenSubChild={this.setValueforParent.bind(this)}></ChildUserTemplate>
            </div>
        );
    }
}

UserTemplate.propTypes = {
    //name: PropTypes.string,
    //name: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    designation: PropTypes.string,
    age: PropTypes.number,
    status: PropTypes.bool,
    //address: PropTypes.object,
    address: PropTypes.shape({
        flatno: PropTypes.number,
        area: PropTypes.string,
        city: PropTypes.string
    }),
    //language: PropTypes.array,
    language: PropTypes.arrayOf(PropTypes.string),
    onload: PropTypes.func
}

export default UserTemplate;