import React from 'react';

class InputGroup extends React.Component {

    static propTypes = {
        children: React.PropTypes.node
    };

    static defaultProps = {
        className: 'form-group'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

export default InputGroup;