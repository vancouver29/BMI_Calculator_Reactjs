import React, { Component } from "react";
import "./BMI.css";

export default class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 170, // 1.7 m
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

    displayHeight() {
        const cm = this.state.height;
        return `${cm} ` + this.pluralize(cm, "CM", "CMs");
    }

    displayWeight() {
        // const kg = this.state.weight;
        // return `${kg} kg`;
        return (
            this.state.weight + " " + this.pluralize(this.state.weight, "KG", "KGs")
        );
    }

    displayBMI() {
        let bmi = (1.3 * this.state.weight) / (this.state.height / 100) ** 2.5;
        let lastTwoDecimalPlaces = Math.floor(bmi * 100) % 100;
        return Math.floor(bmi) + "." + lastTwoDecimalPlaces;
    }

    displayClassification() {
        let bmi = parseFloat(this.displayBMI());
        if (bmi < 18.5) {
            return ( <
                div >
                <
                span className = "warning" > Underweight < /span> <
                a className = "sitelink"
                href = "https://www.nhs.uk/live-well/healthy-weight/advice-for-underweight-adults/" >
                What can i do ?
                    <
                    /a> <
                    /div>
            );
        } else if (bmi < 24.9) {
            return "Normal";
        } else if (bmi < 29.9) {
            return "Overweigth";
        } else {
            return ( <
                div >
                <
                span className = "warning" > Obese < /span> <
                a className = "sitelink"
                href = "https://www.kidney.org/atoz/content/obesewyska" >
                What can i do ?
                    <
                    /a> <
                    /div>
            );
        }
    }

    pluralize(count, singular, plural) {
        return count == 1 ? singular : plural;
    }

    render() {
        return ( <
            div className = "container" >
            <
            h1 > BMI Calculator < /h1> <p> Height </p >
            <
            p >
            <
            input type = "range"
            value = { this.state.height }
            min = "1"
            max = "250"
            onChange = { this.handleHeightChange }
            />{" "} <
            /p>{" "} <
            p > Weight < /p>{" "} <
            p >
            <
            input type = "range"
            value = { this.state.weight }
            min = "1"
            max = "250"
            onChange = { this.handleWeightChange }
            />{" "} <
            /p>{" "} <
            div className = "result" > { this.displayHeight() } < /div>{" "} <
            div className = "result" > { this.displayWeight() } < /div>{" "} <
            div className = "result" > { this.displayBMI() } < /div>{" "} <
            div className = "result" > { this.displayClassification() } < /div>{" "} <
            /div>
        );
    }
}