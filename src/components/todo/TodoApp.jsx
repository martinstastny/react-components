import React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: 'Make a room', done: true },
        { title: 'Clean a kitchen.', done: false },
      ],
    };
  }

  updateItems = (item) => {
    const items = this.state.items;
    items.push({ title: item });
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <p>Todo App</p>
        <TodoAdd onFormSubmit={this.updateItems} />
        <TodoList items={this.state.items} />
      </div>
    );
  }

}

export default TodoApp;
