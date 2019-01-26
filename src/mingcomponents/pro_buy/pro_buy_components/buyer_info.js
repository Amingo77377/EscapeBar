import React, {Component} from 'react'
import './buyer_info.scss'

const WARN_LIST = [
  {id:0, text:"請輸入姓名"},
  {id:1, text:"請輸入Email"},
  {id:2, text:"請輸入密碼"},
  {id:3, text:"確認密碼有誤"},
  {id:4, text:"請輸入手機號碼"}
]

var m_user = ""
var m_userName = null
var m_userEmail = null
var m_userMobile = null
if(localStorage.getItem('userId') !== null){
  m_user = JSON.parse(localStorage.getItem('userId'))
  m_userName = m_user.nickname
  m_userEmail = m_user.email
  m_userMobile = m_user.mobile
}

class BuyerInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      // login: false,
      nickname: "",
      email: "",
      password: "",
      password2: "",
      mobile: "",
      comment: "",
      warnList: this.props.warnList
    }
  }
  nameChange = (evt) => {
    let nickname = evt.target.value
    m_userName = nickname
    this.setState({
      nickname
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  emailChange = (evt) => {
    let email = evt.target.value
    m_userEmail = email
    this.setState({
      email
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  passwordChange = (evt) => {
    let password = evt.target.value
    this.setState({
      password
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  password2Change = (evt) => {
    let password2 = evt.target.value
    this.setState({
      password2
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  mobileChange = (evt) => {
    let mobile = evt.target.value
    m_userMobile = mobile
    this.setState({
      mobile
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  commentChange = (evt) => {
    let comment = evt.target.value
    this.setState({
      comment
    }, () => {
      this.props.getBuyerInfo(this.state)
    })
  }
  makeWarningTips = () => {
    return (
      <div className="warnTips">
        {WARN_LIST.map( c => 
          <div key={c.id} className="tip">
            <div className={`aaa ${this.state.warnList[c.id] ? "none" : ""}`}>！</div>
            <div className={`text ${this.state.warnList[c.id] ? "none" : ""}`}>{c.text}</div>
          </div>
        ) }
      </div>)
  }
  componentDidUpdate(){
    m_user = ""
    m_userName = null
    m_userEmail = null
    m_userMobile = null
  }

  // componentDidMount() {
  //   let warnList = this.state.warnList.slice()
  //   // console.log("props")
  //   warnList[this.props.warnList] = false
  //   console.log(warnList)
  //   this.setState({
  //     warnList
  //   })
    
  // }
  render(){
    // console.log("state.warnList:"+this.state.warnList)
    
    let login = (localStorage.getItem('userId') !== null) ? "d-none" : ""
    
    
    return(
      <React.Fragment>
        <div id="buyer_info" ref={this.props.refProp}>
          <div className="title">
            <h3>購買人資料</h3>
            <div className={`reg_tip ${login}`}>快好了！只要在標有<span>*</span>的欄位填入資訊就註冊成<u>會員</u>喽~</div>
          </div>
          <div id="info_form">
            <div className="for_label">
              <label><span>*</span>姓名</label>
              <label><span>*</span>E-mail</label>
              <label className={login}><span>*</span>密碼</label>
              <label className={login}><span>*</span>確認密碼</label>
              <label><span>*</span>手機</label>
              <label>備註</label>
            </div>
            <div className="for_input">
              <input type="input" maxLength={15} onChange={this.nameChange} value={m_userName}></input><br/>
              <input type="email" onChange={this.emailChange} value={m_userEmail}></input><br/>
              <input className={login} maxLength={255} type="password" onChange={this.passwordChange}></input><br className={login}/>
              <input className={login} maxLength={255} type="password" onChange={this.password2Change}></input><br className={login}/>
              <input type="tel" maxLength={10} onChange={this.mobileChange} value={m_userMobile}></input><br/>
              <textarea rows="4" cols="40" name="comment" maxLength={255} onChange={this.commentChange}/>
            </div>
            {this.makeWarningTips()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default BuyerInfo