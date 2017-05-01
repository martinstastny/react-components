import React from 'react';
import SearchListItem from './SearchListItem';

export default class SearchList extends React.Component {

  static defaultProps = {
    className: 'list-group',
  };

  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    searchTerm: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  makeSearch() {
    return this.props.data.filter((item) => {
      const matchPattern = `${item.first_name} ${item.last_name}`;
      return matchPattern.toLowerCase().indexOf(this.props.searchTerm) !== -1;
    });
  }

  render() {
    const createItem = (item, index) => (<SearchListItem class="list-group-item" key={index} data={item} />);
    return (
      <ul className={this.props.className}>
        {this.makeSearch().map(createItem)}
      </ul>
    );
  }
}
