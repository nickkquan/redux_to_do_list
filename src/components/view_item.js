import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneItem } from "../actions";

class ViewItem extends Component {
	componentDidMount() {
		this.props.getOneItem(this.props.match.params.id);
	}
	render() {
		console.log("ViewItem Props: ", this.props);
		return (
			<div className="text-center">
				<h1>View Item Details</h1>
				<div className="row justify-content-end">
					<Link to="/" className="btn btn-outline-primary">
						Go Back
					</Link>
				</div>
				<p>ID: {this.props.match.params.id}</p>
				<h3>Title: {this.props.item.title}</h3>
				<p>Description of to-do item: {this.props.item.details}</p>
				<p>Item created: {this.props.item.created}</p>
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
