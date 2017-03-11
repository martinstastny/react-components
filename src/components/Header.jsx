import React from 'react';

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
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="">Book</a></li>
                            <li><a href="">Code</a></li>
                            <li><a href="">Demos</a></li>
                            <li><a href="">Website</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;