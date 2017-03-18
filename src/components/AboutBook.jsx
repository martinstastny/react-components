import React from 'react';
import Card from './Card';

class AboutBook extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-wrapper">
                <Card>
                    <a href="https://google.com">
                        <img src="https://placehold.it/200x100"/>
                    </a>
                </Card>
            </div>
        )
    }

}

export default AboutBook;