import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import PRODUCTS from './home/products/products.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <PRODUCTS/>
      </div>
    );
  }
}

export default App;
