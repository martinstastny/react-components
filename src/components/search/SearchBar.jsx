import React from 'react';

export default class SearchBar extends React.Component {

  static defaultProps = {
    className: 'search-bar',
  };

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div {...this.props}>{this.props.children}</div>
    );
  }
}
