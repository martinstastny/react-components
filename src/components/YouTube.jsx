import React from 'react';

class YouTube extends React.Component {

    static propTypes = {
        videoid: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <iframe className="youtube" width="560" height="315" frameBorder="0" allowFullScreen="true"
                    src={`https://www.youtube.com/embed/${this.props.videoid}?rel=0&amp;controls=0&amp;showinfo=0`}>
            </iframe>
        )
    }

}
export default YouTube;
