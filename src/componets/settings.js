import React, { Component } from 'react';

class Settings extends Component {

    render() {
        const divStyle = {
            color: 'white',
            backgroundColor: 'blue'
        }

        const data = {
            name: 'Mr.A',
            age: 22,
            role: 'Programmer'
        }

        return (
            <div>
                <h3>Welcome to Settings Page in React</h3>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        )
    }
}

export default Settings;