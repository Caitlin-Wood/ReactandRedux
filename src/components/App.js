import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
//import { selectSong } from '../actions' //{} means importing a named export not a default

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;

//note semantic grid system is different than css