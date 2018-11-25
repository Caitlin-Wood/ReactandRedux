import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map(video => {
		return (
				<VideoItem 
					key={video.id.videoId}
					onVideoSelect={onVideoSelect} 
					video={video} 
				/>
		);
	});

	return <div className="ui relaxed divided list"> {renderedList} </div>;
};

export default VideoList;

// VideoList was passed a props of the videos prop in App
// change props in arrow func arg to the destructerd path props.videos
// by adding () then {} with videos. now when reference in block
// only need to write videos. instead of props.videos. 

//div ui class from semantic ui