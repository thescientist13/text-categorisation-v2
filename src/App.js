import React, { Component } from 'react';
import './App.css';
import Home from './Views/Home';
import { BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Home/>
     
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
