import React, {PropTypes, Component} from 'react'

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
        const boxStyle = props.plain ? "card" : "card-box";
        const cardSyle = props.className ? `${boxStyle} ${props.className}` : boxStyle;

        return (
            <div onClick={props.onClick} className={cardSyle}>{props.children}</div>
        )
    }

}

export default Card;