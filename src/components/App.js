import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});

		this.setState({ images: response.data.results });
	};


	render(){
		return (
			<div className="ui container" style={{marginTop:'10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} /> 
			</div>

		);
	}

}

export default App;

// props go down through components 
// therefore use App to create a method to call SearchBar
// and SearchBar will return result

// therefore refactor the App to a class component
// see Lecture 83

// in onSearchSubmit:
// query param from unsplash docs 
// note axios (tp package) faster than fetch
// axios returns a promise (some amount of work complete)
// use .then() with arrow func to return with asynch (clunky)
// could use async instead

// setting state to empty array is better when we KNOW 
// it will end up an array for the ex. of when we tested if 
// call was working by display .length of the resposne results
// length is an array function that would not work if we
// defined state as null or undefined. 

// don't want all the config info in our App class
// poor form
// therefor create api folder with unsplash