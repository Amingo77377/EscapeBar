import React, {Component} from 'react'
import './buyer_info.scss'

class BuyerInfo extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="buyer_info">
          <h3>購買人資料</h3>
          <div id="info_form">
            <div className="for_label">
              <label><span>*</span>姓名</label>
              <label><span>*</span>E-mail</label>
              <label><span>*</span>密碼</label>
              <label><span>*</span>確認密碼</label>
              <label><span>*</span>手機</label>
              <label>備註</label>
            </div>
            <div className="for_input">
              <input type="input"></input><br/>
              <input type="email"></input><br/>
              <input type="password"></input><br/>
              <input type="password"></input><br/>
              <input type="input"></input><br/>
              <textarea rows="4" cols="40" name="comment" />
            </div> 
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default BuyerInfo