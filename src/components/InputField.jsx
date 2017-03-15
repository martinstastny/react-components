import React from 'react';

class InputField extends React.Component {

    static propTypes = {
        placeholder: React.PropTypes.string
    };

    static defaultProps = {
        className: 'form-control'
    };

    render() {
        return (<input {...this.props} />)
    }
}

export default InputField;