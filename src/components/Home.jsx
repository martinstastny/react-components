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
                <header className="header">
                    <Header/>
                </header>
                <main className="main-content">
                    <div className="container">
                        <World/>
                        <YouTube videoid="MhkGQAoc7bc"/>
                        <GitHub repository="facebook/react"/>
                        <GitHub repository="facebookarchive/python-instagram"/>
                        <Workflow/>
                        <InputGroup>
                            <InputLabel title="Label" attrFor="form1"/>
                            <InputField id="form1" type="text" placeholder="Heloo" required/>
                        </InputGroup>
                        <Button href="/" title="Please submit!" className="btn-danger" size="btn-lg"/>

                        <h1>Charts</h1>
                        <Chart onClick={this.updateSeries} width={300} height={200} series={this.state.series} minY={0}>
                            <Transform method={['transpose', 'stackNormalized']}>
                                <Pies
                                    colors="category10"
                                    combined
                                    innerRadius="33%"
                                    padAngle={0.025}
                                    cornerRadius={5}
                                    innerPadding={2}
                                    pieAttributes={{
                                        /* eslint-disable no-return-assign, no-param-reassign */
                                        onMouseMove: (e) => e.target.style.opacity = 1,
                                        onMouseLeave: (e) => e.target.style.opacity = 0.5
                                        /* eslint-enable no-return-assign, no-param-reassign */
                                    }}
                                    pieStyle={{opacity: 0.5}}
                                />
                            </Transform>
                        </Chart>

                        <Chart
                            onClick={this.updateSeries}
                            width={300}
                            height={200}
                            series={this.state.series}
                            minY={0}
                        >
                            <Animate _ease="bounce" _ease="elastic">
                                <Layer width="80%" height="80%" position="middle center">
                                    <Ticks
                                        axis="y"
                                        ticks={{maxTicks: 4}}
                                        tickVisible={({tick}) => tick.y > 0}
                                        lineLength="100%"
                                        lineVisible
                                        lineStyle={{stroke: 'lightgray'}}
                                        labelStyle={{
                                            textAnchor: 'end',
                                            alignmentBaseline: 'middle',
                                            fontSize: '0.5em',
                                            fill: 'lightgray'
                                        }}
                                        labelAttributes={{x: -5}}
                                    />
                                    <Ticks
                                        axis="x"
                                        label={({tick}) => tick.x + 1}
                                        labelStyle={{
                                            textAnchor: 'middle',
                                            alignmentBaseline: 'before-edge',
                                            fontSize: '0.5em',
                                            fill: 'lightgray'
                                        }}
                                        labelAttributes={{y: 3}}
                                    />
                                    <Bars
                                        groupPadding="3%"
                                        innerPadding="0.5%"
                                        barAttributes={{
                                            /* eslint-disable no-return-assign, no-param-reassign */
                                            onMouseMove: e => e.target.style.fillOpacity = 1,
                                            onMouseLeave: e => e.target.style.fillOpacity = 0.5
                                            /* eslint-enable no-return-assign, no-param-reassign */
                                        }}
                                        barStyle={{
                                            fillOpacity: 0.5
                                        }}
                                    />
                                    <Lines lineWidth={2}/>
                                    <Labels
                                        label={({point}) => (`y=${Math.round(point.y)}`)}
                                        dotStyle={{
                                            textAnchor: 'middle',
                                            dominantBaseline: 'text-after-edge',
                                            fontFamily: 'sans-serif',
                                            fontSize: '0.65em'
                                        }}
                                        labelAttributes={{
                                            y: -4
                                        }}
                                    />
                                </Layer>
                            </Animate>
                        </Chart>

                    </div>
                </main>
            </div>
        );
    }
}

export default Home;