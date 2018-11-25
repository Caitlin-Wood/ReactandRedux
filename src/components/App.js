import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('buildings');
	}
	//used a default search keyword, could put anything (or leave out)

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});//pre configured axios instance

		this.setState({ 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}; 

	onVideoSelect = video => {
		this.setState ({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
					 <div className="eleven wide column">
					 	<VideoDetail video={this.state.selectedVideo} />
					 </div>
					 <div className="five wide column">
					 	<VideoList 
							onVideoSelect={this.onVideoSelect} 
					 	 	videos={this.state.videos}
					 	/>
					 </div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

// still not fully understanding how the App is mitgating the parent/child
// issue of passing props
// how is the callback being linked to the on search fire? 
// here in App, SearchBar fires with onTermSubmit getting called

// therefore, the onFormSubmit props is this App instance's onTermSubmit
// you can see that this.props.onFormSubmit gets called in SearchBar 
// thats saying, for this(APp instance).props(onTermSubmit).onFormSubmit(which obj are the props from)
// in (), the 'term' is getting passed, which in SearchBar
// we define term arg. as this.state.term

// response to data and items path can see through response console log