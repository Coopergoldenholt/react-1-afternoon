import React, { Component } from "react";

export default class FilterString extends Component {
	constructor() {
		super();

		this.state = {
			unFilteredArray: [
				"James",
				"Tony",
				"Cooper",
				"Jake",
				"Kalani",
				"Andrew",
				"Jonny"
			],
			userInput: [],
			filteredArray: []
		};
	}

	updateUserInput(newInput) {
		this.setState({
			userInput: newInput
		});
	}

	updateArray(newInput) {
		let names = this.state.unFilteredArray;
		let filteredNames = [];
		for (let i = 0; i < names.length; i++) {
			if (names[i].includes(newInput)) {
				filteredNames.push(names[i]);
			}
		}
		this.setState({
			filteredArray: filteredNames
		});
	}

	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">
					Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}
				</span>
				<input
					className="inputLine"
					onChange={newInput => this.updateUserInput(newInput.target.value)}
				></input>
				<button
					className="confirmationButton"
					onClick={() => {
						this.updateArray(this.state.userInput);
					}}
				>
					Filter
				</button>
				<span className="resultsBox filterStringRB">
					Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}
