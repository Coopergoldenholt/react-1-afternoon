import React, { Component } from "react";

export default class Palindrome extends Component {
	constructor() {
		super();

		this.state = {
			userInput: "",
			palindrome: ""
		};
	}

	changeInput(newInput) {
		this.setState({
			userInput: newInput
		});
	}

	updatePalindrome(newInput) {
		let forward = newInput;
		let backwards = newInput;
		backwards = backwards.split("");
		backwards = backwards.reverse();
		backwards = backwards.join("");

		if (forward === backwards) {
			this.setState({
				palindrome: "true"
			});
		} else {
			this.setState({
				palindrome: "false"
			});
		}
	}

	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4></h4>
				<input
					className="inputLine"
					onChange={newInput => this.changeInput(newInput.target.value)}
				></input>
				<button
					className="confirmationButton"
					onClick={() => this.updatePalindrome(this.state.userInput)}
				>
					Check
				</button>
				<span className="resultsBox">Palindrome: {this.state.palindrome}</span>
			</div>
		);
	}
}
