// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ReactDOM from "react-dom";
import App from "./App";
import './styles/main.css';

// To fix ResizeObserver loop completed with undelivered notifications.
window.addEventListener('error', (event) => {
  if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
});

// Get the Root Element
const rootElement = document.getElementById('root');

// Element
const element = <App />;

// Render Element
ReactDOM.render(element, rootElement);
