import React, {Component} from 'react';
import './pro_search_bar.scss';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      city: 1,
      price: 500,
      people: 5
    }
    
  }
  componentDidUpdate(){
    
  }
  onSearch = (evt) => {
    this.props.search(this.state);
    evt.preventDefault();
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_search_bar">
          <form>
            <div id="search_input">
                <i className="fas fa-search"></i><input />
            </div>
            <select>
              <option>縣市</option>
            </select>
            <select>
              <option>cate</option>
            </select>
            <select>
              <option>people</option>
            </select>
            <select>
              <option>price</option>
            </select>
            <button id="search-btn" onClick={this.onSearch}>搜尋 </button>
          </form>
        </div>
      </React.Fragment>
    )
  }


}

export default SearchBar;