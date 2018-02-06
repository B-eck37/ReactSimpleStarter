 // Create New Component. This Component should produce some HTML.
import React from 'react';
import ReactDOM from 'react-dom';


//Components are classes. This code below is a class.
const App = () => {
    //JSX within a class is a class or component instance. Wrapping your class in JSX is also an instance.
    return <div> Hello there </div>;
}


// Take this Component's HTML and put on the page (in the DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));
