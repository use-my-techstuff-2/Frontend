import React from "react";
import { createStore } from "redux";
import "./App.css";
import { Provider } from "react-redux";

import reducer from "./reducers/rootreducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
