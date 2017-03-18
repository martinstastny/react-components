import React from 'react';
import Header from './Header';

class Landing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Landing;