// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


/*function getButtonText(){			//this function can be invoked in component return block
	return 'Click on me!';
}*/

// Create a react component //JSX (this is js, not html)
const App = () => {
 const buttonText = {text: 'Click Me!'};
 const labelText = 'Enter Name:';

  return (
  <div>
    <label className="label" htmlFor="name">
     {labelText}</label>
    <input id="name" type="text"/>
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
     {buttonText.text}
    </button>
  </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
	<App />,                         //JSX  tags
    document.querySelector('#root')  //ref to DOM element that already exists in the html file

);


//notes: any JSX here is getting converted to ES5 js (not enough browsers know JSX)
//		 through Babel (JavaScript compiler)
//       is returning React.createElement function calls (simplifies for us)
//       right now use className (and forName instead for) to avoid confusion with class objects (but js getting advanced at understanding difference so may not need to)

//{}	 can reference functions and variables in the JSX using this syntax
//       we cannot take a js object and reference as specifically where we would show text
//       therefore use .text to show the .text property of the object
//		 style for ex: first {} is saying want to ref a js var , then inside is the style object