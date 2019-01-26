import React, {Component} from 'react'
import './pay_type.scss'

const PAY_TYPE_LIST = [
  {type:"credit_card", text:"信用卡線上付款"},
  {type:"atm", text:"ATM轉帳"},
  {type:"ibon", text:"超商付款"},
]

class PayType extends Component {
  constructor(props){
    super(props)
    this.state = {
      payType : PAY_TYPE_LIST.map(c => false),
    }
  }
  selPayType = (index) =>{
    let list = this.state.payType
    list = list.map( c => c = false )
    list[index] = true
    this.setState({
      payType: list
    })
    this.props.checkPayType(PAY_TYPE_LIST[index].type)
  }
  makePayTypeOption = () => {
    let list = this.state.payType
    let options = PAY_TYPE_LIST.map((option, index) => {
      let className = list[index] ? "checked" : ""
      return (
        <div id={option.type} 
        key={index} data-type={option.type} 
        className={`option ${className}`} 
        onClick={() => {this.selPayType(index)}}>
          {option.text}
        </div>
      )
    })
    return options
  }
  render(){
    let none = this.props.warn ? "none" : ""
    return(
      <React.Fragment>
        <div id="pay_type" ref={this.props.refProp}>
          <div>
            <h3>開立發票</h3>
            <div className="receipt">本遊戲不適用 逃脫吧 電子發票，請現場索取發票 / 收據，或由遊戲工作室另行寄送。</div>
          </div>
          <div>
            <h3>付款方式</h3>
            <div className="sel_pay_type">
              {this.makePayTypeOption()}
            </div>
          </div>
          <div className={`warning ${none}`}>請選擇付款方式</div>
        </div>
      </React.Fragment>
    )
  }
}


export default PayType