import React from 'react';
import Header from './Header';
import World from './World';
import YouTube from './YouTube';
import GitHub from './GitHub';
import Workflow from './Workflow';
import Button from './Button';

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
                        <GitHub repository="facebook/react"/>
                        <GitHub repository="facebookarchive/python-instagram"/>
                        <Workflow/>
                        <Button href="/" title="Please submit!" className="btn-danger" size="btn-lg"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;