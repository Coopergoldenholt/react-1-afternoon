import React, { Component } from "react";

export default class FilterObject extends Component {
	constructor() {
		super();

		this.state = {
			unfilteredArray: [
				{
					name: "Jimmy",
					title: "Hacker",
					age: 12
				},
				{
					name: "Jeremy",
					age: 24,
					hairColor: "brown"
				},
				{
					name: "Carly",
					title: "CEO"
				}
			],
			userInput: "",
			filteredArray: []
		};
	}

	editUserInput(newInput) {
		this.setState({
			userInput: newInput
		});
	}

	updateArray(newInput) {
		let employees = this.state.unfilteredArray;
		let returnedEmployees = [];

		for (let i = 0; i < employees.length; i++) {
			if (employees[i].hasOwnProperty(newInput)) {
				returnedEmployees.push(employees[i]);
			}
		}
		this.setState({
			filteredArray: returnedEmployees
		});
	}

	render() {
		return (
			<div className="puzzleBox filterOnjectPB">
				<h4> Filter Object</h4>
				<span className="puzzleText">
					Original: {JSON.stringify(this.state.unfilteredArray)}
				</span>
				<input
					className="inputLine"
					onChange={newInput => this.editUserInput(newInput.target.value)}
				></input>
				<button
					className="confirmationButton"
					onClick={() => {
						this.updateArray(this.state.userInput);
					}}
				></button>
				<span className="resultsBox filterObjectRB">
					Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}
