import React from 'react';
import Header from './Header';
import World from './World';
import YouTube from './YouTube';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="header">
                    <Header/>
                </header>
                <main className="main-content">
                    <div className="container">
                        <World/>
                        <YouTube videoid="MhkGQAoc7bc"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;