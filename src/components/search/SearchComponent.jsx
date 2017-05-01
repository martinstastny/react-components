import React from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';
import SearchInputAddon from './SearchInputAddon';
import * as searchData from './searchdata.json';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: '',
      searchAddonVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      data: searchData.items,
    });
  }

  onInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    this.setState({ searchTerm, searchAddonVisible: ((searchTerm.length > 0)) });
  };

  onClear = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: '', searchAddonVisible: false });
  };

  render() {
    return (
      <div className="search">
        <h2>Search list</h2>
        <SearchBar>
          <SearchFilter data={searchData} />
          <div className="search-input-group">
            <SearchInput onChange={this.onInputChange} value={this.state.searchTerm} />
            <SearchInputAddon
              className={`clear-ico fa fa-times-circle ${this.state.searchAddonVisible ? '' : 'hidden'} `}
              onClick={this.onClear}
            />
          </div>
        </SearchBar>
        <SearchList data={this.state.data} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}
