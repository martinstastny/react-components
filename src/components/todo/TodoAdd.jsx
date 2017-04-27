import React from 'react';

class TodoAdd extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== '') {
      this.props.onFormSubmit(this.state.title);
      this.setState({ title: '' });
    } else {
      alert('Your Todo is empty! Set some name!');
    }
  };

  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.onSubmit}>
          <input type="text" placeholder="New todo" onChange={this.onChange} value={this.state.title} />
          <input type="submit" value="Add new" />
        </form>
      </div>
    );
  }
}

export default TodoAdd;
