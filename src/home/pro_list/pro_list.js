import React, {Component} from 'react';
import './pro_list.scss';
import { SearchBar,
         ProFilter,
         ProSort,
         ProCard,
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
  search = () => {
    fetch("http://localhost:3000/eb/pro_list/")
    .then(res=>res.json())
    .then(products => this.setState({
      products:products
    }));
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
            <div id="pro_cards">
              <div className="card_rows">
                <ProCard />
              </div>
            </div>
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