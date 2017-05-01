import React from 'react';

export default class SearchFilter extends React.Component {

  static defaultProps = {
    className: 'search-filter',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<div {...this.props} />);
  }
}

