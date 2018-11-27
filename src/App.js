import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Home from './home/home';
import Products from './home/products/products.js';
import ProList from './home/pro_list/pro_list.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Home /> */}
          {/* <Products/> */}
          {/* <ProList/> */}
          <Route exact path="/" Component={ProList} />
          <Route path="/products" Component={Products} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
