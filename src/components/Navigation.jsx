import React from 'react';
import NavigationLink from './NavigationLink';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="nav navbar-nav">
                <NavigationLink activeWhenExact={true} to="/" title="Home"/>
                <NavigationLink to="/book" title="Book"/>
                <NavigationLink to="/embeds" title="Embeds"/>
                <NavigationLink to="/demos" title="Demos"/>
                <NavigationLink to="/website" title="Website"/>
            </ul>
        )
    }

}

export default Navigation;