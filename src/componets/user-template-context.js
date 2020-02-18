import React, { Component } from 'react';
import ChildUserTemplateContext from './child-user-template-context';

class UserTemplateContext extends Component {
    render() {
        return (
            <div>
                <h4>User Template Child Component</h4>
                <ChildUserTemplateContext></ChildUserTemplateContext>
            </div>
        );
    }
}

export default UserTemplateContext;