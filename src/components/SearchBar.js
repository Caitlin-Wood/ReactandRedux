import React from 'react';
 
 class SearchBar extends React.Component {
 	state = { term: ''};


 	onFormSubmit = event => {
 		event.preventDefault();

 		this.props.onSubmit(this.state.term);
 	//props now in a class component, therefore add this (only diff)
 	};

 	render(){
 		return (
 			<div className="ui segment">
 				<form onSubmit={this.onFormSubmit} className="ui form">
 					<div className="field">
 						<label>Image Search</label>
 						<input 
 							type="text"  
 							value={this.state.term} 
 							onChange={e => this.setState({ term: e.target.value })} 
 						/>
 					</div>
 				</form>
 			</div>

 		);
 	}
 }

 export default SearchBar;

 // an alternate way to show event
 // replace prop with arrow func
 // onChange={(event) ==> console.log(event.target.value)}
 // this is the same thing that we have right now
 // note event is also often abbrev. to 'e'

 // onInputChange func is not controlled, add state obj
 
 // we don't want to store data in html
 // we should store it in react components
 // don't want data stored in the DOM , flow should be 
 // centralized in our state props 

 // technically input knows what the value is, 
 // but setting the value equal to the current input
 // is what is actually storing the data
 // seems redundant, but this ensure react is the driver

 // controlled is easier to handle certain things ie
 // adding .toUpperCase() at end of target value call

 // default vanialla js, form/input with enter submits 
 // and page entirely refreshes
 // therefore add event handler for prevent default
 // WILL USE THIS A LOT IN DEV

// this. inside methods
// always pay attention to where the func is called
// what is to teh left of the function? 
// thats the instance the func and this. will reference
// re-watch lecture 80, understand until undefined exp. 

// either use a binding function with constructor
// or ES5 uses build in for this with arrow function
// could put directly onFormSubmit func
// or do it directly in render as we did with onChange