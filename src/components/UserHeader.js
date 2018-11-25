import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

	render() {
		//now only passing the one user we care about:
			//deconstruct this.props.user;
		const { user }= this.props;

		if (!user) {
			return null;
		}

		return <div className="header"> {user.name} </div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps) (UserHeader);


//because we have fetchUserandPosts we dont did the didMount anymore
//with fetchUser

//theres an issue, there are 100 posts but only 10 users
//if we look in our requests on the network console
//we can see that after we get the posts
//we get userId 1, 10 times in a row
//our mount method is redundantly fetching the userId 10 times in a row
//THIS IS CALLED OVERFETCHING, and 2 methods to solve
//one is memoize and another involves lengthy code
//helper function for this lodash.com , memoize func
//memoize causes you to call a func the first time (the original version)
//then i would call the func again, the func is not going to run again
//the same copy of the original func would be returned
//memoize will only run the func once when it is unique name/identification
//therefore calling the same name twice won't work but calling 
//therefore MEMOIZE OUR ACTION CREATOR 

//instead of how we first did it (which works) where we look for the correct
//user in the component, we will look in teh mapStateToProps for the correct
//user- bigger applications will often have the mapState and connect as a 
//seperate file so that it can be reused as for example there may be many cases
//where you want to use the applicable user as identified by their id
//therefore don't need to go look through the whole users list everytime in every
//component 

//would think this would be an issue to get the components props userId
//in our === statement of the mapToStates but we actually can reach 
//to get that prop
//mapState doesn't only get state as an argument, it also gets ownProps
//ownProps also gets whatever props that also went in to component

//see first way we did it below: 

/* 

class UserHeader extends React.Component {
	componentDidMount () {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		//find the user that we care about in the entry instance
		const user = this.props.users.find(user => user.id === this.props.userId);

		if (!user) {
			return null;
		}

		return <div className="header"> {user.name} </div>;
	}
}

const mapStateToProps = (state) => {
	return {users: state.users };
};

export default connect(mapStateToProps, { fetchUser }) (UserHeader);

*/