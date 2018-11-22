import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import PRODUCTS from './home/products/products.js';
import ProList from './home/pro_list/pro_list.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <PRODUCTS/>
        {/* <ProList/> */}
      </div>
    );
  }
}

export default App;
