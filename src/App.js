import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import './App.scss';
import Products from './mingcomponents/products/products.js';
import ProList from './mingcomponents/pro_list/pro_list.js';
import ProBuy from './mingcomponents/pro_buy/pro_buy.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        {/* <Switch> */}
          {/* <ProList/> */}
          <Route exact path="/proList" component={ProList} />
          <Route exact path="/proList/products/:ID" component={Products} /> 
          <Route path="/proList/products/reservation/:ID" component={ProBuy} />
        {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
