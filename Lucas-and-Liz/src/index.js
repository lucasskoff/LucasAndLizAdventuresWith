import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';

import * as serviceWorker from './serviceWorker';
import App from './component/App';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <App/>
    </div>,
    destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
