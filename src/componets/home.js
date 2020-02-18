import React, { Component, PureComponent } from 'react';
import UserTemplate from './user-template';

class Home extends PureComponent {
    constructor(props) {
        super();
        console.info('Initialize the state -> constructor()')
        this.state = {
            name: 'Mr.A',
            message: 'Welcome to React World',
            list: [],
            login: 'client',
            user: {
                "id": 100,
                "name": "Mr.A",
                "designation": "UI Developer",
                "location": "Chennai",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
        }
    }

    componentWillMount() {
        console.info('Execute before Render Method -> componentWillMount()')
    }

    componentDidMount() {
        console.info('Execute after Render Method -> componentDidMount()')
    }

    componentWillUpdate() {
        console.info('Execute before State is modified  -> componentWillUpdate()')
    }

    componentDidUpdate() {
        console.info('Execute after State is modified  -> componentDidUpdate()')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.info('old state', this.state.name)
    //     console.info('new upcoming state', nextState)
    //     console.info('State or props is changed  ->  shouldComponentUpdate(nextProps, nextState')
    //     if (this.state.name == nextState.name) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        console.info("calls whenever a component receives a props -> componentWillReceiveProps() ")
    }

    componentWillUnmount() {
        console.info("cleared from DOM -> componentWillUnmount() ")
    }

    onInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    updateName() {
        this.setState({
            name: "Miss.B"
        });
    }

    render() {
        console.info('Execute Render Method -> render()')
        console.info(this.props.history.location.state)
        const clientPage = <h3>Welcome to Client Page - {this.state.name}</h3>;
        const adminPage = <h3>Welcome to Admin Page - {this.state.name}</h3>;

        return (
            <div>
                {/* {this.state.login == 'client' ? clientPage : adminPage} */}
                {/* <label> Enter Your Name:</label>
                <input type="text" onChange={this.onInputChange.bind(this)} /> */}
                <h3>Welcome to Home Page - {this.state.name}</h3>
                {/* <button onClick={() => this.updateName()}>Change Name</button> */}
            </div>
        )
    }
}

export default Home;