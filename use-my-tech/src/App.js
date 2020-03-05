import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserPage from "./components/UserPage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/posts" component={UserPage} />
    </div>
  );
}

export default App;
