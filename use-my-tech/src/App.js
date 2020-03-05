import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Register} />
      <Route path='/Login' component={Login} />
    </div>
  );
}

export default App;
