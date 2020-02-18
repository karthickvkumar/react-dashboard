import React, { Component } from 'react';

class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.message.day,
            result: '',
            status: true,
            value: 0
        }

    }

    increment() {
        console.info('FUNCTION Triggered')
        this.setState({
            value: 10,
            content: "Monday"
        })
    }

    render() {
        return (
            <div>
                <h1>Sample Component</h1>
                <span>{this.state.content} - </span>
                <span>{this.state.value}</span>
                <br></br>
                <button onClick={() => this.increment()}>Click</button>
            </div>
        );
    }
}

export default SampleComponent;