import React from "react";

import "./App.css";

import reducer from "./reducers/rootreducer";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserPage />
      </header>
    </div>
  );
}

export default App;
