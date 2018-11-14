import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import PRODUCT from './home/product/product.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <PRODUCT/>
      </div>
    );
  }
}

export default App;
