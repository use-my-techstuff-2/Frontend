import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { createStore } from "redux";
import './App.css';
import { Provider } from "react-redux";

import reducer from "./reducers/rootreducer";

const store = createStore(reducer);

function App(props) {
  return (
    <div className='App'>
      <Route path='/Register' component={Register} />
      <Route exact path='/Login' component={Login} />
    </div>
  );
}

export default App;
