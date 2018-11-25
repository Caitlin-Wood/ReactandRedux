export default (state=[], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default: 
			return state;
	}
};



//switch often used instead of an if statement with a returned state as final
//especially if many cases to compare
/*export default (state=[], action) => {
	if (action.type === 'FETCH_POSTS') {
		return action.payload;
	}

	return state;
};*/