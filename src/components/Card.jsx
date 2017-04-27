import React, {PropTypes, Component} from 'react';

"use strict";

class Card extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        onClick: PropTypes.func,
        plain: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        children: null,
        onClick: null,
        plain: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        const boxStyle = this.props.plain ? "card" : "card-box";
        const cardSyle = this.props.className ? `${boxStyle} ${this.props.className}` : boxStyle;

        return (
            <div onClick={this.props.onClick} className={cardSyle}>{this.props.children}</div>
        )
    }

}

export default Card;