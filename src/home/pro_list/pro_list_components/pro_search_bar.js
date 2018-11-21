import React, {Component} from 'react';
import './pro_search_bar.scss';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      city: ">=1",
      price: null,
      people: null
    }
    
  }
  componentDidUpdate(){
    
  }
  onSearch = (evt) => {
    this.props.search(this.state);
    evt.preventDefault();
  }
  // selCity = () => {
  //   let city = document.forms.value;
  //   console.log(city);
  //   this.setState({
  //     city: city
  //   })
  //   console.log(this.state.city)
  // }
  render(){
    return(
      <React.Fragment>
        <div id="pro_search_bar">
          <form>
            <div id="search_input">
                <i className="fas fa-search"></i><input />
            </div>
            <select id="sel_city" onChange={this.selCity}>
              <option data-value=">=1" >選擇縣市</option>
              <option data-value="=1" onClick={this.selCity}>台北市</option>
              <option data-value="=2" onClick={this.selCity}>新北市</option>
              <option data-value="=4" onClick={this.selCity}>桃園市</option>
              <option data-value="=5" onClick={this.selCity}>新竹市</option>
              <option data-value="=8" onClick={this.selCity}>台中市</option>
              <option data-value="=10" onClick={this.selCity}>南投縣</option>
              <option data-value="=12" onClick={this.selCity}>嘉義市</option>
              <option data-value="=14" onClick={this.selCity}>台南市</option>
              <option data-value="=15" onClick={this.selCity}>高雄市</option>
              <option data-value="=19" onClick={this.selCity}>宜蘭縣</option>
              {/* <option data-value="=22">全台</option> */}
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