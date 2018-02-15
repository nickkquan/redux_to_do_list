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
};

// export default function(store){
//     function(next){
//         function(store){
//             //code goes here
//         }
//     }
// }
