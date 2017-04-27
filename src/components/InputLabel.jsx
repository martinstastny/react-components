import React from 'react';

class InputLabel extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    attrFor: React.PropTypes.string,
  };

  static defaultProps = {
    title: null,
    attrFor: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label htmlFor={this.props.attrFor}>{this.props.title}</label>
    );
  }

}

export default InputLabel;
