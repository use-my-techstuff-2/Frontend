import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/Register' component={Register} />
      <Route exact path='/' component={Login} />
    </div>
  );
}

export default App;
