import React from 'react';

'use strict';

class GitHub extends React.Component {

    static propTypes = {
        repository: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        repository: 'https://api.github.com/repos/facebook/react'
    };

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            stargazers_count: '',
            open_issues: '',
            data: null
        };
    }

    componentDidMount() {
        const sourceRepo = `https://api.github.com/repos/${this.props.repository}`;
        this.request = fetch(sourceRepo).then(function (response) {
            response.json().then(this.setResponseData)
        }.bind(this));
    }

    setResponseData = (data) => {

        const context = {
            full_name: data.full_name,
            stargazers_count: data.stargazers_count,
            open_issues: data.open_issues
        };

        this.setState({data: context});
    }

    render() {
        if (this.state.data) {
            return (
                <div>{this.state.data.full_name}, {this.state.data.stargazers_count}, {this.state.data.open_issues}</div>
            )
        }

        return (<div>Loading...</div>)
    }

}

export default GitHub;