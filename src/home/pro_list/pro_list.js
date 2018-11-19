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

    }

  }
  componentDidUpdate(){
        
  }

  render(){
    return(
      <React.Fragment>
        <div id="pro_list">
          <SearchBar />
          <div className="w80">
            <ProFilter />
            <ProSort />
            <ProCards />
            <ProCategories />
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProList;