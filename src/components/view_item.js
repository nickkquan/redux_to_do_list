import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneItem, toggleComplete, deleteItem } from "../actions";

class ViewItem extends Component {
	componentDidMount() {
		this.props.getOneItem(this.props.match.params.id);
	}

	handleDeleteItem(id) {
		this.props.deleteItem(id).then(() => {
			this.props.history.push("/");
		});
	}

	handleCompleteItem(id) {
		this.props.toggleComplete(id)
	}

	render() {
		let unixDate = new Date(parseInt(this.props.item.created));
		let date = unixDate.toLocaleString();

		let status = this.props.item.complete ? "Yes" : "No";

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
				<p>Description: {this.props.item.details}</p>
				<p>Item created: {date}</p>
				<p>Completed: {status}</p>
				<p>ID: {this.props.match.params.id}</p>
				<button
					onClick={
						() => this.handleCompleteItem(this.props.item._id)
						// toggleComplete(this.props.match.params.id)
					}
					className="btn btn-outline-success mr-3"
				>
					Toggle Complete
				</button>
				<button
					type="button"
					onClick={() => this.handleDeleteItem(this.props.item._id)}
					className="btn btn-outline-danger"
				>
					Delete Item
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.todo.single
	};
}

export default connect(mapStateToProps, { getOneItem, toggleComplete, deleteItem })(ViewItem);
