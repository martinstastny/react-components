import React from 'react';
import Navigation from './Navigation';

"use strict";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">React Speed</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <Navigation/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;