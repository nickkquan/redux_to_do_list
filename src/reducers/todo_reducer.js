import types from "../actions/types";

const DEFAULT_STATE = {
	all: [],
	single: {}
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_ALL_TODOS:
			console.log("Get All To-dos", action.payload);
			return state;
		default:
			return state;
	}
}
