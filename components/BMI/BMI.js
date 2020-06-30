import React, { Component } from "react";
import "./BMI.css";

export default class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 1.7, // 1.7 m
            weight: 65, // 65 kg
        };

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
    }

    handleHeightChange(ev) {
        this.setState({ height: ev.target.value });
    }

    handleWeightChange(ev) {
        this.setState({ weight: ev.target.value });
    }

    render() {
        return ( <
            div className = "container" >
            <
            h1 > BMI Calculator < /h1> <
            p > Height < /p>

            <
            p >
            <
            input type = "range"
            value = { this.state.height }
            min = "1"
            max = "250"
            onChange = { this.handleHeightChange }
            /> <
            /p> <
            p > Weight < /p> <
            p >
            <
            input type = "range"
            value = { this.state.weight }
            min = "1"
            max = "250"
            onChange = { this.handleWeightChange }
            /> <
            /p>

            <
            div className = "result" > { this.state.height } < /div>

            <
            div className = "result" > { this.state.weight } < /div> <
            /div>
        );
    }
}