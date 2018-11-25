import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {spans: 0};

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10)

		this.setState ( { spans });

	};
	// arrow since we know we need to bind the callback

	render () {
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img 
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;

// using console log 
// each imagecard inside app, has a current reference
// ref is a js object with current prop and the attached prop
// in this case is img 
// and img has a list of props

// but if you try this.imageRef.current.clientHeight
// you will get a height of 0 
// the console does not yet know what info associated 
// with the DOM node until YOU HIT THE ARROW DOWN

// the img DOM node, is reaching out ot the url and 
// downloading the image
// we are rendering the very next instance what the height is
// but the image tag is still reaching out
// need to make sure it is downloaded first before ref
// therefore DidMount was too early 

// review setSpans and state again (lecture 101- 102)


