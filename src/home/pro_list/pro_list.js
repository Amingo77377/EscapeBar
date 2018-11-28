import React, {Component} from 'react';

import './pro_list.scss';
import { SearchBar,
         ProFilter,
         ProSort,
         ProCards,
         ProCategories
 } from './pro_list_components/index.js'

class ProList extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],
      records: [],
      type:""
    }

  }
  componentDidUpdate(){
        
  }
  search = (data) => {
    // let getProducts = [];
    console.log(data)
    console.log(JSON.stringify(data))
    fetch('http://localhost:3000/eb/pro_list/' + JSON.stringify(data),{
      method:'GET',
      mode: "cors",
      // body: JSON.stringify(data),
      // headers: new Headers({
      //   'Content-Type':'application/json'
      // })
    })
    .then(res=>res.json())
    .then(products => this.setState({
      products:products,
      records: data,
      type: "search"
    }));
    // .then(products => getProducts = products)
    console.log("products:" + JSON.stringify(this.state.products));
    console.log(this.state.products)
    console.log("records:" + this.state.records.city);
  }
  filter = (str) => {
    fetch('http://localhost:3000/eb/pro_list/filter/' + str ,{
      method:'GET',
      mode:'cors',
    })
    .then(res => res.json())
    .then(products => this.setState({
      products: products,
      type: "filter"
    }))
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_list">
          <SearchBar search={this.search} type={this.state.type}/>
          <div className="w80">
            <ProFilter filter={this.filter} type={this.state.type}/>
            <ProSort />
            <ProCards products={this.state.products}/>
            <ProCategories />
            <br />
            <br /><br /><br /><br /><br />
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProList;