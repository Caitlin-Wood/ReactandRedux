import axios from 'axios';


const KEY = 'AIzaSyB9i4MattHADEuq-CFX45wlgVqUZmJwoHs';

export default axios.create ({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

