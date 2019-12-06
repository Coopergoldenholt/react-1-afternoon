import React, { Component } from "react";

export default class EvenAndOdd extends Component {
	constructor() {
		super();

		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: ""
		};
	}

	updateUserInput(input) {
		this.setState({
			userInput: input
		});
	}

	splitNumber(input) {
		let splitInputs = input.split(",");
		let evens = [];
		let odds = [];
		for (let i = 0; i < splitInputs.length; i++) {
			if (splitInputs[i] % 2 === 0) {
				evens.push(parseInt(splitInputs[i], 10));
			} else {
				odds.push(parseInt(splitInputs[i], 10));
			}
		}
		this.setState({
			evenArray: evens,
			oddArray: odds
		});
	}

	render() {
		return (
			<div className="puzzleBox evenAndOddPB">
				<h4> Evens and Odds </h4>
				<input
					className="inputLine"
					onChange={input => this.updateUserInput(input.target.value)}
				/>
				<button
					className="confrimationButton"
					onClick={() => {
						this.splitNumber(this.state.userInput);
					}}
				>
					Split
				</button>
				<span className="resultsBox">
					Evens: {JSON.stringify(this.state.evenArray)}
				</span>
				<span className="resultsBox">
					Odds: {JSON.stringify(this.state.oddArray)}
				</span>
			</div>
		);
	}
}
