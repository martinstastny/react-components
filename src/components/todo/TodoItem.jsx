import React from 'react';

class TodoItem extends React.Component {

  static defaultProps ={
    title: '',
  };

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className={this.props.class} key={this.props.index}>{this.props.title}</li>
    )
  }
}

export default TodoItem;