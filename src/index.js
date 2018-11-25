import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
	state = { lat: null, errorMessage: ''}; 


		componentDidMount () {
			window.navigator.geolocation.getCurrentPosition(
				position => this.setState({ lat: position.coords.latitude }),
				err => this.setState({ errorMessage: err.message })
			)};


		renderContent () {
			if (this.state.errorMessage && !this.state.lat) {
				return <div>Error: {this.state.errorMessage }</div>;
			}

			if (!this.state.errorMessage && this.state.lat) {
				return <SeasonDisplay lat={this.state.lat} />
			}

			return <Spinner message="Please accept location request" />;
		}


	//React says we have to define render!! 
								//instead we used helper object
	render() {
		return (
			<div className="border red">
				{this.renderContent()}  /
			</div>

		);
	} 

} // App class close


ReactDOM.render(<App />, document.querySelector('#root'));


// constructor specific to js not react therefore not required
// constructor gets instantly called before anything else
// gets called anytime an instance of class called (first thing);
// therefore this is a good way to initialize our state (there are other ways too) 

// super() , our App is extending from base class
// constructor happens anyway, we can write it if we want to work with initial states
// we are therefore overriding the constructor func of the react class
// need to call super first thing to ensure it gets called
// consider calling super in constructor a cerimonial task

// this.state is our state object, will contain important and relevent properites
// we know we need to hold the latitude property as important info
// therefore add lat to our state object and initialize 
// we know it needs to be a # but don't know it yet, therefore
// set the lat key to a value of null (this says we know its a number, but don't know it yet)

// render will be called regularly in component
// we never want to initialize work or calls in the render method
// render gets called constantly therefore move geolocaiton check into consructor

// never ever ever set direct assignment to our state
// the only ONE exception is when we initilize the state in contructor fucntion
// ie. never say this.state.lat = posiiton.coords.latitude 

//conditional rendering - could use else statement but okay with just if's

/******* COMPONENT LIFECYCLES *******/

// another way to initilize (consider Component Lifecycle methods)
// constructor() - >  render() [you have to put render]
// 		some content now visible on screen
// then componentDidMount() calls at least once if called
// 		component sits and waits for updates
// componentDidUpdate(), if we define this as well then it would update
//	 	continues to sit and wait for more updates
// 		NOTE the render will be re-run again any time this is invoked!
// componentWillUnmount(), gets called to remove or cleanup
// can call these in console.log to see if they were correctly invoked as expected

// additional lifecyles methods but infrequently used
// 		shouldComponentUpdate()
//		getDerivedStateFromProps()
//		getSnapshotBeforeUpdate()

/*	
	** examples of Lifecycle methods for learning**

	* these methods could go above the render()

		componentDidMount(){
			console.log('My component was rendered to the screen');
		}

	// react docs say only use DidMount for data-loading
	// technically can put in construcotr but better readability
	// to leave contructor for initial and DidMount for data-loading

		componentDidUpdate(){
			console.log('My component was just updated - it re-rendered');
		}
*/

// initializing state outside of constructor common
// likely see many examples where contructor is never mentioned
// therefore remove this.state = and outside constructor
// say state = etc. etc. 

// if you put our state = in babel, you can see how 
// it changes it to the contructor that we wrote out

/******* PASSING STATE AS PROPs *******/
// where we return a <div> Latitude: {this.state.lat}</div>;
// we can return another comp and pass the state as props

