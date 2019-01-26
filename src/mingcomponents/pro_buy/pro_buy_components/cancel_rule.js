import React, {Component} from 'react'
import './cancel_rule.scss'

class CancelRule extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: false
    }
  }
  agreeCheck = () => {
    let {check} = this.state
    check = !check
    this.setState({
      check
    })
    this.props.agreeCheck(check)
  }
  render(){
    let check = this.state.check ? "checked" : ""
    let none = this.props.warn ? "none" : ""
    return(
      <React.Fragment>
        <div id="cancel_rule" ref={this.props.refProp}>
          <h3>取消條款</h3>
          <div className="rule">本工作室票券一旦售出概不退還。<br />
            更改日期辦法：<br />
            出發日前 6 日至前 2 日內(不含出發日)可更改日期。但更改僅限一次，並僅限於同一主辦單位之活動。<br />
            出發日前 2 日至當日內不接受更改日期、時間。<br />
            建議您出發日前 2 日內如須改期，可將名額轉讓。但請務必告知 逃脫吧 代理參與者的姓名及聯絡資訊。
          </div>
          <div className={`agree_check ${check}`} onClick={this.agreeCheck}>我同意上述條款</div>
          <div className={`warning ${none}`}>請同意取消條款</div>
        </div>
      </React.Fragment>
    )
  }
}


export default CancelRule