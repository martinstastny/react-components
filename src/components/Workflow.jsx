import React from 'react';
import steps from 'fixtures/steps';

class Workflow extends React.Component {

    static propTypes = {
        steps: React.PropTypes.array.isRequired
    };

    static defaultProps = {
        steps: steps
    };

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {stepsIndex: 0};
        this.cycleSequence = this.cycleSequence.bind(this);
        this.cycleScenario = this.cycleScenario.bind(this);
    }

    cycleSequence() {
        let nextIndex = this.state.stepsIndex === (this.props.steps.length - 1) ? 0 : this.state.stepsIndex + 1;
        this.setState({stepsIndex: nextIndex})
    }

    cycleScenario() {
        const steps = this.props.steps;
        const currentStep = steps[this.state.stepsIndex];
        let stepsCount = 0;

        for (let i = 0; i < steps.length; i++) {
            if (steps[i].symbol == currentStep.symbol) {
                stepsCount++;
            }
        }

        let currentScenario = currentStep.scenario;
        const loopStart = (this.state.stepsIndex + stepsCount) >= steps.length ? 0 : this.state.stepsIndex + 1;
        for (let i = loopStart; i < steps.length; i++) {
            if (steps[i].scenario != currentScenario) {
                this.setState({stepsIndex: i});
                break;
            }
        }
    }

    render() {
        const steps = this.props.steps;
        const currentStep = steps[this.state.stepsIndex];
        let stepsCount = 0;
        for (let i = 0; i < steps.length; ++i) {
            if (steps[i].symbol === currentStep.symbol) stepsCount++;
        }

        return (
            <div className="workflow">
                <div className="workflow__scenario">
                    {currentStep.scenario}
                </div>
                <div className="workflow__text">
                    {currentStep.text}
                </div>
                <ul className="pagination workflow__nav">
                    <li onClick={this.cycleScenario} className="workflow__symbol">
                        <a>{currentStep.symbol}</a>
                    </li>
                    <li className="workflow__steps">
                        <a>Current: {stepsCount}</a>
                    </li>
                    <li onClick={this.cycleSequence} className="workflow__sequence">
                        <a>{currentStep.sequence}</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Workflow;