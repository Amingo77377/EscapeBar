import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.scss';
import Products from './home/products/products.js';
import ProList from './home/pro_list/pro_list.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          {/* <ProList/> */}
          {/* <NavLink to="/products">111</NavLink> */}
          <Route exact path="/" component={ProList} />
          <Route path="/products/:ID" component={Products} /> 
        </Switch>
          {/* <Home /> */}
          {/* <Products/> */}
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
