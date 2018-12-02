import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.scss';
import Products from './home/products/products.js';
import ProList from './home/pro_list/pro_list.js';
import ProBuy from './home/pro_buy/pro_buy.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        {/* <Switch> */}
          {/* <ProList/> */}
          <Route exact path="/" component={ProList} />
          <Route exact path="/products/:ID" component={Products} /> 
          <Route path="/products/reservation/:ID" component={ProBuy} />
        {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
