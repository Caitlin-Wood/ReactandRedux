import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
		//using await here makes sure API request responds
	  //console.log(getState().posts);
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	userIds.forEach(id => dispatch(fetchUser(id)));
		//lodash has its own map func and uniq
		//which we can use to return the reduced array
};

export const fetchPosts = () => async dispatch => {
		const response= await jsonPlaceholder.get('/posts');

		dispatch( {type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

 dispatch( { type: 'FETCH_USER', payload: response.data });
};

//look at how lodash's _.chain method can refactor fetchPostsAndUsers 
//in a a more elegant way

//also note if you needed to use await on forEach, it doesn't work
//woudld need to use map instead with promises?

//export const fetchUser = id => dispatch => 	_fetchUser(id, dispatch);
//
//const _fetchUser = _.memoize( async (id, dispatch) => {
//	const response = await jsonPlaceholder.get(`/users/${id}`);
//
//dispatch( { type: 'FETCH_USER', payload: response.data });
//});

//the second overfetching method uses another actioncreator
//fetchPostsandUsers

//see notes in UserHeader for why memoize (the underscore)
//and need to change our syntax from what we are used to with the fetchUser
//imagine regular function(id) for ex syntax 
//add _.memoize to inner or outer? the outer we would think bc
//the id should be unique thought? - this would return the func(dispatch)
//which is still going and making the network request! no better
// therefore try memoize teh INNER function - but in console STILL
// see multiple requests!
// but now we are re-creating the request because of the outer function

// NEED TO DEFINE A FUNC OUTSIDE OF THE ACTION CREATOR THAT WILL 
// MAKE THE REQUEST AND DISPATCH ACTION
// AND THEN MEMOIZE IT OUTSIDE OF THE ACTION CREATOR


//when we return this user payload, it is actually and object unlike 
// fetchposts which was an array of objects

// to ensure just the array we want returned, use data prop (would see on console log)
// if left as just response.

// we don't care about what was returned from the async inner func
// the outer function is what we care about
// thunk it is common to use a arrow func rather than named function
// don't have to pass second arguement of getState in this case

// since on;y returning 1 thing, so could optionally remove { on fetchposts}
// and remove return 


//not right with Redux, this was how we would have done with React
//will get error message that says action needs to be plain object
//change to a promise if remove async and await to allow block code to be plain js
/*export const fetchPosts = async () => {
	const response = await jsonPlaceholder.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: response
	};
};*/