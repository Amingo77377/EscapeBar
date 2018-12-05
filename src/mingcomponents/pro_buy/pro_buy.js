import React, {Component} from 'react'
import './pro_buy.scss'
import {BuyFlow,
        BuyerInfo,
        BuyerInfoLogin,
        PayType,
        CancelRule,
        ProDetail
} from './pro_buy_components/index.js'

class ProBuy extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="pro_buy">
          <BuyFlow />
          <div id="buy_body80">
            <div className="body_l">
            <BuyerInfo />
            <BuyerInfoLogin />
            <PayType />
            <CancelRule />
            <div id="pay-btn"></div>
            </div>
            <div className="body_r">
            <ProDetail />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default ProBuy