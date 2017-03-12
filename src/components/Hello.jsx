import React from 'react';

class Hello extends React.Component {
    render() {
        return(
            <h1>{this.props.greet}, {this.props.message}</h1>
        )
    }
}

Hello.propTypes = {
    greet: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired
};

export default Hello;