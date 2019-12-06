import React, { Component } from "react";

export default class Sum extends Component {
	constructor() {
		super();

		this.state = {
			number1: 0,
			number2: 0,
			sum: null
		};
	}

	updateNumber1(newInput) {
		this.setState({
			number1: parseInt(newInput, 10)
		});
	}
	updateNumber2(newInput) {
		this.setState({
			number2: parseInt(newInput, 10)
		});
	}

	sum(num1, num2) {
		this.setState({
			sum: num1 + num2
		});
	}

	render() {
		return (
			<div className="puzzleBox sumPB">
				<h4 className="inputLine">Sum:</h4>
				<input
					className="inputLine"
					onChange={newInput => this.updateNumber1(newInput.target.value)}
				></input>
				<input
					className="inputLine"
					onChange={newInput => this.updateNumber2(newInput.target.value)}
				></input>
				<button
					className="confirmationButton"
					onClick={(num1, num2) =>
						this.sum(this.state.number1, this.state.number2)
					}
				>
					Add
				</button>
				<span>Sum: {this.state.sum}</span>
			</div>
		);
	}
}
