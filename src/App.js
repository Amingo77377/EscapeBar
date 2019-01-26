import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import IndexBody from './components/IndexBody'
import EscapeRoomMap from './components/Map'
import Article from './components/Article'
// import InfoWindow from './components/practice/InfoWindow'
import StarRatingComponent from 'react-star-rating-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


//ming
import './App.scss';
import Products from './mingcomponents/products/products.js';
import ProList from './mingcomponents/pro_list/pro_list.js';
import ProBuy from './mingcomponents/pro_buy/pro_buy.js';
//

// kai
import Register from './kaicomponents/register/Register';
import Member from './kaicomponents/member/Member';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//

//Charlie
import startActivity from './charliecomponents/startActivity';
import activityInfo from './charliecomponents/activityInfo';
import companyList from './charliecomponents/companyList';
import companyInfo from './charliecomponents/companyInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header/>
          <Nav/>
          <Route exact path="/" component={IndexBody} />
          <Route path="/indexbody" component={IndexBody} />
          <Route path="/map" component={EscapeRoomMap} />
          <Route path="/article/:articlename" component={Article}/>
          <Route exact path="/proList" component={ProList} />
          <Route exact path="/proList/products/:ID" component={Products} /> 
          <Route path="/proList/products/reservation/:ID" component={ProBuy} />
          <Route exact path="/startActivity" component={startActivity}/>
          <Route path="/startActivity/activityInfo/:id" component={activityInfo}/>
          <Route exact path="/companyList" component={companyList}/>
          <Route path="/companyList/companyInfo/:cid/:city_id" component={companyInfo}/>

          {/* http://localhsot:3000/register */}
          <Route path="/register" component={Register} />
          {/* http://localhsot:3000/center */}
          <Route path="/center" component={Member} />

          {/* <IndexBody/> */}
          {/* <EscapeRoomMap/> */}
          <Footer/>
        </section>
      </BrowserRouter>
    );
  }

}
export default App;