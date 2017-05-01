import React from 'react';

export default class SearchInputAddon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i {...this.props} />
    );
  }

}