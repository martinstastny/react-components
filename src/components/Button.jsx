import React from 'react';

class Button extends React.Component {

    static defaultProps = {
        title: null,
        href: null,
        className: 'btn-primary'
    };

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string,
        size: React.PropTypes.string,
        color: React.PropTypes.string,
        className: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {

        let renderClass = this.props.className ? `btn ${this.props.className}` : renderClass;
        let size = this.props.size ? `${this.props.size}` : '';
        renderClass = `${renderClass} ${size}`;

        return(
            <a className={renderClass} href={this.props.href}>{this.props.title}</a>
        )
    }
}

export default Button;