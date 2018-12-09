import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TestPage from './TestPage';
import Reduce from './Reduce';
import DragDrop from './DragDrop';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="App-title">Fib Calculator version 3</h2>
            </div>
            
            <div className="Links">
              <Link to="/">Home</Link>
              <Link to="/test">Test Page</Link>
              <Link to='/reduce'>USe of Reduce()</Link>
              <Link to='/drag'>Drag and Drop</Link>
            </div>

          </header>
          <div>
            <Route exact path="/" component={Fib}></Route>
            <Route exact path="/test" component={TestPage}></Route>
            <Route exact path="/reduce" component={Reduce}></Route>
            <Route exact path="/drag" component={DragDrop}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
