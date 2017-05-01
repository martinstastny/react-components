import React from 'react';

export default class SearcListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.data.id}
          className={this.props.class}>{this.props.data.first_name} {this.props.data.last_name} <span
        className="badge">{this.props.data.gender}</span><span
        className="badge">{this.props.data.country}</span><span
        className="badge">{this.props.data.company}</span></li>
    );
  }
}

