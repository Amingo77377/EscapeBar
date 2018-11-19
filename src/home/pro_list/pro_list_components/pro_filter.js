import React, {Component} from 'react';
import './pro_filter.scss';

class ProFilter extends Component{
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
        <div id="pro_filter">
          <div>
            <h4>所在地區</h4>
            <form id="city_filter">
              <input  id="taipei" type="checkbox" value="taipei" name="city" />
              <label htmlFor="taipei">taipei</label>
              <input  id="1" type="checkbox" value="taipei" name="city" />
              <label htmlFor="1">11111</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              <input  id="2" type="checkbox" value="taipei" name="city" />
              <label htmlFor="2">2222</label>
              
            </form>
          </div>
          <div>
            <h4>遊戲類型</h4>
            <form id="cate_filter"></form>
          </div>
          <div>
            <h4>適合人數</h4>
            <form id="people_filter"></form>
          </div>
          <div>
            <h4>價格範圍</h4>
            <form id="price_filter"></form>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProFilter;