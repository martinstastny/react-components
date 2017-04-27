import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const createItem = function (item, index) {
      return (<TodoItem class={item.done ? 'done' : 'item'} key={index} title={item.title} />);
    };

    return (
      <ul>
        {this.props.items.map(createItem)}
      </ul>
    );
  }
}

export default TodoList;
