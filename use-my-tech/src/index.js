import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootreducer";


ReactDOM.render(
  <Provider store={store}>
     <Router>
    <App />
   </Router>
  </Provider>,
  document.getElementById("root")
);

