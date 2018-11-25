import './SeasonDisplay.css'; //webpack will see that this is css, and put it in index.html
import React from 'react';


// create function that determines month
// can put below but try to keep logic out 
// of functional components as best can

const seasonConfig = {
	summer: {
		greeting: 'Let\'s hit the beach!',
		iconName: 'sun'
	},
	winter: {
		greeting: 'Burr, it is cold!',
		iconName: 'snowflake'
	}
};


const getSeason = (lat, month) =>{
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'; //js ternary expression
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { greeting, iconName } = seasonConfig[season];

	 	// ternary similar so created seasonConfig object
	 	// keeping below lines of code for education	
	 		//const greeting = season === 'winter' ? 'Burr, it\'s chilly' : 'Let\'s hit the beach!' 	
	  	//const icon = season === 'winter' ? 'snowflake' : 'sun';	
	

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{greeting}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;



// could create helper func for season rather than
// have logic directly inside JSX (i  will change to use helper)

// the <i> is using semantic ui class naming which requires
// icon return string plus the word icon as required
// in semantic ui's explanation for how to tag the icon
// can also change size of icon (doc explains) with className addition

// notice we can refactor some of the expressions (ie. greeting and icon)
