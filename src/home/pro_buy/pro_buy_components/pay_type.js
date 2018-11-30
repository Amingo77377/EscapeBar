import React, {Component} from 'react'
import './pay_type.scss'

class PayType extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="pay_type">
          <div>
            <h3>開立發票</h3>
            <div className="receipt">本遊戲不適用 逃脫吧 電子發票，請現場索取發票/收據，或由遊戲工作室另行寄送。</div>
          </div>
          <div>
            <h3>付款方式</h3>
            <div className="sel_pay_type">
              <div id="sel_cd_card" className="option">信用卡線上付款</div>
              <div id="sel_ATM" className="option">ATM轉帳</div>
              <div id="sel_ibon" className="option">超商付款</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default PayType