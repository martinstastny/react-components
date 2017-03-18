import React from 'react';
import Card from './Card';
import YouTube from './YouTube';

class AboutEmbeds extends React.Component {

    render() {
        return(
            <Card>
                <YouTube videoid="MhkGQAoc7bc" />
            </Card>
        );
    }

}

export default AboutEmbeds;