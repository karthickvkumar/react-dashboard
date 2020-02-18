import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            employeeList: [],
            loader: true,
            name: '',
            job: ''
        }
    }

    componentDidMount() {
        const url = 'https://reqres.in/api/users?page=2';
        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        loader: false,
                        employeeList: response.data.data
                    })
                })
                .catch((error) => {
                    console.log(error)
                });
        }, 2000);

    }

    handleForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
        const responseData = {
            name: this.state.name,
            job: this.state.job
        }
        const url = "https://reqres.in/api/users";
        axios.post(url, responseData)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {

            })
    }

    render() {
        const { employeeList, loader } = this.state;

        const listOfData = employeeList.map((value, index) => {
            return (
                <div key={index}>
                    <span>Employee Name is : </span>
                    <span>{value.first_name + ' ' + value.last_name}</span>
                    <br></br>
                    <span>Employee Email is : </span>
                    <span>{value.email}</span>
                    <br></br>
                    <span>-------------------------</span>
                </div>
            )
        })

        const loaderElement = <h3>Loading...</h3>;

        return (
            <div>
                <div>
                    <label>Enter name :</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleForm.bind(this)} />
                    <br></br>
                    <label>Enter job :</label>
                    <input type="text" name="job" value={this.state.job} onChange={this.handleForm.bind(this)} />
                    <br></br>
                    <button onClick={() => this.onSubmitForm()}>Submit</button>
                </div>
                {loader ? loaderElement : listOfData}
            </div>
        )
    }
}

export default Profile;