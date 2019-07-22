import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Letter from './Letter';
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector("#container");
   
    ReactDOM.render(
      <div>
        <Letter bgcolor="#58B3FF">L</Letter>
        <Letter bgcolor="#FF605F">U</Letter>
        <Letter bgcolor="#FFD52E">C</Letter>
        <Letter bgcolor="#49DD8E">A</Letter>
        <Letter bgcolor="#AE99FF">S</Letter>
        <Letter bgcolor="white"> </Letter>
        <Letter bgcolor="#FF605F">A</Letter>
        <Letter bgcolor="#FFD52E">N</Letter>
        <Letter bgcolor="#49DD8E">D</Letter>
        <Letter bgcolor="white"> </Letter>
        <Letter bgcolor="#58B3FF">L</Letter>
        <Letter bgcolor="#FF605F">I</Letter>
        <Letter bgcolor="#FFD52E">Z</Letter>
      </div>,
      destination
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
