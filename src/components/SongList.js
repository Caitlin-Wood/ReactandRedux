import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={() => this.props.selectSong()}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
	// this.props is therefore the return obj from mapStateToProps
		return <div className="ui divided list"> {this.renderList()} </div>;
	}
}

//this is convention to name this func
const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(mapStateToProps, {
	selectSong: selectSong
}) (SongList);
// syntax looks weird but is js code
//connect returns a function, therefore first set calls the func
// the second set invokes the function

//connect communicates to provider, provider will tell it if any of the 
// relative data has changed

// state is all the reduceres from our store object

//configure connect by passing it a function in first ()