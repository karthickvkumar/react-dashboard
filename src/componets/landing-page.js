import React, { Component } from "react";
import {
    BrowserRouter,
    HashRouter,
    MemoryRouter,
    Route,
    Switch,
    NavLink
} from "react-router-dom";

import Home from "./home";
import Profile from "./profile";
import Settings from "./settings";
import User from "./user";
import PageNotFound from "./page-not-found";
import UserContext from './user-context';

class LandingPage extends Component {
    onLogout() {
        this.props.history.push("/");
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <h3> Welcome to Dashboard </h3>
                        <div
                            style={{
                                marginTop: "-70px", //margin-top
                                marginLeft: "600px"
                            }}
                        >
                            <button className="button" onClick={() => this.onLogout()}>

                                Logout
                            </button>
                        </div>
                        {/* <Link to='/home'>Home</Link>
                                        <br></br>
                                        <Link to='/home/profile'>Profile</Link>
                                        <br></br>
                                        <Link to='/home/settings'>Settings</Link> */}
                        <NavLink
                            to="/home"
                            exact={true}
                            activeClassName="active-btn"
                            className="button"
                        >
                            Home
                        </NavLink>
                        <br />
                        <NavLink
                            to="/home/profile"
                            activeClassName="active-btn"
                            className="button"
                        >
                            Profile
                        </NavLink>
                        <br />
                        <NavLink
                            to="/home/settings"
                            activeClassName="active-btn"
                            className="button"
                        >
                            Settings
                        </NavLink>
                        <br />
                        <NavLink
                            to="/home/user"
                            activeClassName="active-btn"
                            className="button"
                        >
                            User
                        </NavLink>
                        <br />
                        <NavLink
                            to="/home/user-context"
                            activeClassName="active-btn"
                            className="button"
                        >
                            Context API
                        </NavLink>
                    </div>
                    <div className="position-top align-center">
                        <Switch>
                            <Route path="/home/user-context" component={UserContext} />
                            <Route path="/home/user" component={User} />
                            <Route path="/home/profile" component={Profile} />
                            <Route path="/home/settings" component={Settings} />
                            <Route path="/home" exact component={Home} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default LandingPage;
