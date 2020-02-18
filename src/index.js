import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Link, HashRouter, MemoryRouter, Switch } from 'react-router-dom';
import { BrowserRouter, HashRouter, MemoryRouter, Route, Switch } from 'react-router-dom';

import Login from './componets/login'
import Signup from './componets/signup'
import LandingPage from './componets/landing-page'
import PageNotFound from './componets/page-not-found'

import './css/style.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <div>
                    <Link to='/'>Login Page</Link>
                    <br></br>
                    <Link to='/signup'>Signup Page</Link>
                </div> */}
                <div className="position-top">
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={LandingPage} />
                        <Route path="/" exact component={Login} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));