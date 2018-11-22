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
      products: []
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
      products:products
    }));
    // .then(products => getProducts = products)
    console.log(this.state.products);    
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_list">
          <SearchBar search={this.search}/>
          <div className="w80">
            <ProFilter />
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