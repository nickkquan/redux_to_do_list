export default store => next => action => {
	if (!action.payload || !action.payload.then) {
		return next(action);
	}
	action.payload.then(resp => {
		const newAction = {
			...action,
			payload: resp
		};
		store.dispatch(newAction);
	});
	return action.payload;
};

// export default function(store){
//     function(next){
//         function(store){
//             //code goes here
//         }
//     }
// }
