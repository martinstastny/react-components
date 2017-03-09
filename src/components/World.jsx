import React from 'react';
import Hello from './Hello';


export default class World extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGreeting: props.greet,
            value: 'React Speed'
        };
        this.slangGreet = this.slangGreet.bind(this);
        this.hindiGreet = this.hindiGreet.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    slangGreet() {
        this.setState({currentGreeting: 'Yo!'});
    }

    hindiGreet() {
        this.setState({currentGreeting: 'Namaste'});
    }

    handleNameChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        const renderGreeting = this.state.value ? `${this.state.value} says ${this.state.currentGreeting}` : this.state.currentGreeting;
        return (
            <div className="world-card">
                <Hello greet={renderGreeting} message="World!"/>
                <a href="#" onClick={this.slangGreet}>Slang</a> <br />
                <a href="#" onClick={this.hindiGreet}>Hindi</a> <br /><br/>
                <input type="text" value={this.state.value} placeholder="Enter a name"
                       onChange={this.handleNameChange}/>
            </div>
        );
    }
}

World.defaultProps = {
    greet: 'lol',
};