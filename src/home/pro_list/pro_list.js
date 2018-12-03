import React, {Component} from 'react';

import './pro_list.scss';
import { SearchBar,
         ProFilter,
         ProCards,
         ProCategories
 } from './pro_list_components/index.js'

class ProList extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],
      records: {},
      type:"search",
      sort: ""
    }
  }
  search = (data) => {
    this.setState({
      type: "search"
    })
    // let getProducts = [];
    data.sort = this.state.sort
    // console.log("newData:"+newData)
    console.log("data:"+data)
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
    }));
    // .then(products => getProducts = products)
    console.log("products:" + JSON.stringify(this.state.products));
    console.log(this.state.products)
    console.log("records:" + this.state.records);
  }
  filter = (str) => {
    this.setState({
      type: "filter"
    })
    fetch('http://localhost:3000/eb/pro_list/filter/' + str ,{
      method:'GET',
      mode:'cors',
    })
    .then(res => res.json())
    .then(products => this.setState({
      products: products,
    }))
  }
  sort = (sort) => {
    this.setState({
      sort 
    }, ()=> {
      if(this.state.type === "search"){
        this.search(this.state.records)
      }
    })
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_list">
          <SearchBar search={this.search} type={this.state.type}/>
          <div className="w80">
            <ProFilter filter={this.filter} type={this.state.type} count={this.state.products.length} sort={this.sort}/>
            <ProCards products={this.state.products}/>
            <ProCategories search={this.search}/>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProList;