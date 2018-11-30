import React, {Component} from 'react'
import './buy_flow.scss'

class BuyFlow extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="buy_flow">
          <div className="bar"></div>
          <div className="balls">
            <div className="ball">
              <h3>1</h3>
              <p>預約日期與時段</p>
            </div>
            <div className="ball" id="ball2">
               <h3>2</h3>
               <p>選擇付款方式</p>
            </div>
            <div className="ball">
              <h3>3</h3>
              <p>完成購買</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default BuyFlow