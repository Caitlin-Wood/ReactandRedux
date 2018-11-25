import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
	const images = props.images.map(image => {
		return <ImageCard key={image.id} image={image} />;
	});


	return <div className="image-list"> {images} </div>;

};

export default ImageList;

// return img 
// image = passed argument which is img within the indexed 
// array of images, map func iterates thru (for loop condensed) 
// if use Network DevTools , preview each photo img 
// within the images array
// there is a urls prop and within that, a regular prop for size

// rendering LISTS should always have keys
// in this case our root html is image, otherwise 
// could have put key in the containing div

// currently have img tag with the same image root
// <img key={image.id} src={image.urls.regular} alt={image.description}
// instead change passed arg to the func
// replace the image arguement and add () with {} inside