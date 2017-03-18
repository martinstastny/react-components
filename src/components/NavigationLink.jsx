import React from 'react';
import {Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

class NavigationLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route path={this.props.to} exact={this.props.activeWhenExact} children={({match}) => (
                <li className={match ? 'active' : ''}>
                    <Link to={this.props.to}>{this.props.title}</Link>
                </li>
            )}/>
        )
    }

}

export default NavigationLink;