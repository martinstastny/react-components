import React from 'react';

export default class SearchInput extends React.Component {

  static defaultProps = {
    className: 'form-control input-lg',
    placeholder: 'Search',
    type: 'text',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input {...this.props} />
    );
  }
}
