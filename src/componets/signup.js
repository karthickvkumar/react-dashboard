import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userList: [],
            name: '',
            email: '',
            gender: '',
            location: '',
            password: '',
            address: ''
        }
    }
    onLogin() {
        this.props.history.push('/home')
    }

    onSave() {
        console.info(this.state)
        const userInfo = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            location: this.state.location
        }

        this.setState({
            userList: this.state.userList.concat(userInfo),
            name: '',
            email: '',
            gender: '',
            location: '',
            password: '',
            address: ''
        });

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const location = ['Chennai', 'Banglore', 'Hydrabad', 'Mumnai', 'Delhi', 'Cochin', 'Others'];
        const options = location.map((area, index) => {
            return (
                <option value={area} key={index}>{area}</option>
            )
        });
        console.log(options)
        const tableList = this.state.userList.map((user, index) => {
            return (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.gender}</th>
                    <th>{user.location}</th>
                </tr>
            )
        })
        console.log(tableList)
        return (
            <div>
                <h3>Register to Dashboard</h3>
                <label>Enter Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <br></br>
                <label>Enter Email ID:</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <br></br>
                <label>Enter Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br></br>
                <label>Select Gender:</label>
                <input type="radio" name="gender" value="male" onChange={this.handleChange} /> Male
                <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Female
                <input type="radio" name="gender" value="na" onChange={this.handleChange} /> NA

                <br></br>
                <label>Select Locaiton:</label>
                <select value={this.state.location} name="location" onChange={this.handleChange}>
                    <option disabled value="">please select prefered location</option>
                    {options}
                </select>
                <br></br>
                <label>Enter Address:</label>
                <textarea name="address" value={this.state.address} onChange={this.handleChange}></textarea>
                <br></br>
                <button className="button" onClick={() => this.onLogin()}>Login</button>
                <button className="button" onClick={() => this.onSave()}>Save</button>
                <div>
                    {this.state.userList.length > 0 &&
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableList}
                            </tbody>
                        </table>}
                </div>
            </div>
        )
    }
}

export default Signup;