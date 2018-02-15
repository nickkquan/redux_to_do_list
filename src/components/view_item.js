import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneItem } from "../actions";

class ViewItem extends Component {
	componentDidMount() {
		this.props.getOneItem(this.props.match.params.id);
	}

	render() {
		let unixDate = new Date(this.props.item.created * 1000);
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		let year = unixDate.getFullYear();
		let month = months[unixDate.getMonth()];
		let day = unixDate.getDate();
		let date = month + " " + day + " " + year;

		let status = this.props.complete ? "text-success" : "text-danger";
		console.log("ViewItem Props: ", this.props);
		return (
			<div className="text-center">
				<h1>View Item Details</h1>
				<div className="row justify-content-end">
					<Link to="/" className="btn btn-outline-primary">
						Go Back
					</Link>
				</div>

				<h3>Title: {this.props.item.title}</h3>
				<p>Description of to-do item: {this.props.item.details}</p>
				<p>Item created:{date}</p>
				<p className={status}>Completed</p>
				<p>ID: {this.props.match.params.id}</p>
				<button>Toggle Complete</button>
				<button>Delete Item</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.todo.single
	};
}

export default connect(mapStateToProps, { getOneItem })(ViewItem);
