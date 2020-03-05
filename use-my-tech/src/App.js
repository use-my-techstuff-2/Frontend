import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserPage from "./components/UserPage";
import "./App.css";

// import reducer from "./reducers/rootreducer";
// import UserPage from "./components/UserPage";
// const store = createStore(reducer);
// import reducer from "./reducers/rootreducer";

//const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserPage />
      </header>

      <Route path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </div>
  );
}

export default App;
