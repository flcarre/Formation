// import
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = function () {
    const buttonText = {text: "click me"};
    const style = { backgroundColor: 'red', color: 'white', border: '1px solid blue'};
    return <div>
    <label class="label" htmlFor="name">Enter name:</label>
    <input id="name" />
    <button style={style}>
    {buttonText.text}
    </button>
  </div>
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App /> ,
    document.querySelector('#root')
);