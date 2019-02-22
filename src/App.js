import React, { Component } from 'react';
import Header from './component/Header/Header'
import './App.css';
import { Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Link className='links' to="/">Dashboard</Link>
        <Link className='Links' to="/wizard">Wizard</Link>
        { routes }
      </div>
    );
  }
}

export default App;
