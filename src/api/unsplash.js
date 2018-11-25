import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 515a9674cad4b4b31511ebc1f838b48c5a5b2bd220af436f31545c52822ee9ee'
	}	
});

//create lets us customize with what headers we want