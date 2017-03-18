import {map, range} from 'lodash';
import React from 'react';
import Header from './Header';
import World from './World';
import YouTube from './YouTube';
import GitHub from './GitHub';
import Workflow from './Workflow';
import Button from './Button';
import InputGroup from './InputGroup';
import InputField from './InputField';
import InputLabel from './InputLabel';
import {series, singleSeries, cloudSeries} from 'fixtures/charts';
const {
    Chart,
    Bars, Cloud, Labels, Lines, Pies, RadialLines, Ticks,
    Layer, Animate, Transform
} = require('rumble-charts');

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {series, cloudSeries, singleSeries, hovered: {} };
        this.updateSeries = this.updateSeries.bind(this);
    }

    updateSeries = () => {

        const singleSeries = [{
            data: _.map(_.range(3), () => Math.random() * 100)
        }];

        const series = _.map(_.range(3), () => ({
            data: _.map(_.range(3), () => Math.random() * 100)
        }));

        this.setState({series, cloudSeries, singleSeries, hovered: {}});
    }

    render() {
        return (
            <div>
                <World/>
            </div>
        );
    }
}

export default Home;