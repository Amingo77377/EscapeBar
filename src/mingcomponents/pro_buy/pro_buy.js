import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './pro_buy.scss'
import {BuyFlow,
        BuyerInfo,
        PayType,
        CancelRule,
        ProDetail
} from './pro_buy_components/index.js'
import Register from '../../kaicomponents/register/Register';


class ProBuy extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.location.state.id,
      payType: false,
      agreeCheck: false,
      BuyerInfo: false,
      warnList: [true, true, true, true, true],
      successPay: false,

    }
    this.buyerInfoRef = React.createRef()
    this.payTypeRef = React.createRef()
    this.cancelRuleRef = React.createRef()
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  //拿到購買人資料
  getBuyerInfo = (form) => {
    let {warnList} = this.state 
    if(form.nickname !== ""){
      warnList[0] =true
    }
    if(form.email !== ""){
      warnList[1] =true
    }
    if(form.password !== ""){
      warnList[2] =true
    }
    if(form.password2 !== ""){
      warnList[3] =true
    }
    if(form.mobile !== ""){
      warnList[4] =true
    }
    this.setState({
      BuyerInfo: form,
      warnList 
    })
  }
  //選擇付款方式
  checkPayType = (payType) => {
    this.setState({
      payType
    })
  }
  //按下同意條款
  agreeCheck = (check) => {
    this.setState({
      agreeCheck: check
    })
  }
  //scroll to 表單
  scrollToForm = () => {
    window.scrollTo({
      top: this.buyerInfoRef.current.offsetTop -80 ,
    })
  }
  // scroll to payType
  scrollToPayType = () => {
    window.scrollTo({
      top: this.payTypeRef.current.offsetTop  ,
    })
  }
  // scroll to cancelRule
  scrollToCancelRule = () => {
    window.scrollTo({
      top: this.cancelRuleRef.current.offsetTop -80 ,
    })
  }
  //按下預約
  payCheck = () => {
    let {BuyerInfo, data} = this.state
    // 表單都沒填寫
    if(localStorage.getItem('userId') === null){
      if(!BuyerInfo){
        console.log(this.buyerInfoRef.current.offsetTop)
        this.scrollToForm()
        return
      }
      //姓名沒填寫
      if(BuyerInfo.nickname === ""){
        this.scrollToForm()
        let {warnList} = this.state
        warnList[0] = false
        this.setState({
          warnList
        })
        return
      }
      //信箱沒填寫
      if(BuyerInfo.email === ""){
        this.scrollToForm()
        let {warnList} = this.state
        warnList[1] = false
        this.setState({
          warnList
        })
        return
      }
      //密碼沒填寫
      if(BuyerInfo.password === ""){
        this.scrollToForm()
        let {warnList} = this.state
        warnList[2] = false
        this.setState({
          warnList
        })
        return
      }
      if(BuyerInfo.password2 !== BuyerInfo.password){
        this.scrollToForm()
        let {warnList} = this.state
        warnList[3] = false
        this.setState({
          warnList
        })
        return
      }
      //填寫沒手機
      if(BuyerInfo.mobile === ""){
        this.scrollToForm()
        let {warnList} = this.state
        warnList[4] = false
        this.setState({
          warnList
        })
        return
      }
    }
    //選擇付款方式確認
    if(!this.state.payType){
      // alert("請選擇付款方式")
      this.scrollToPayType()
      return
    }
    //同意條款確認
    if(!this.state.agreeCheck){
      // alert("請同意服務條款")
      this.scrollToCancelRule()
      return
    }
    //沒登入會員 購買
    if(localStorage.getItem('userId') === null){
      let info = this.state.BuyerInfo
      let nowUid = "u"+Math.floor(Math.random()*1000)+1;
      let user = {uid: nowUid,
                  nickname: info.nickname, 
                  email: info.email, 
                  password: info.password, 
                  mobile: info.mobile}
      console.log(JSON.stringify(user))
      // 註冊成新會員
      fetch('http://localhost:3000/eb/buy/register' ,{
        method:'POST',
        mode: "cors",
        body: JSON.stringify(user), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json()) 
      .then(result => {
        console.log(result.message)
        switch(result.message){
          case "email重複":
            alert("email重複")
            break
          case "註冊成功":
            // alert("註冊成功")
            let list = {
              STOCK_SID: data.nowDateSid,
              UID: nowUid,
              PEOPLE_NUM: data.number,
              T_PRICE: (data.data.PRICE*data.number),
              PAY_TYPE: this.state.payType,
              STATUS: 1,
              CID: data.data.CID,
              COMM: BuyerInfo.comment
            }
            console.log(list)
            //新增購買清單 & 修改庫存
            fetch('http://localhost:3000/eb/buy/buyList' ,{
              method:'POST',
              mode: "cors",
              body: JSON.stringify(list), 
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(res => res.json())
            .then(results => {
              console.log(results.message)
            })
            this.setState({
              successPay: true
            })
            break
          default:
            break
        }
      })
      return
    }
    //會員登入購買
    let loginList = {
      STOCK_SID: data.nowDateSid,
      UID: JSON.parse(localStorage.getItem('userId')).uid,
      PEOPLE_NUM: data.number,
      T_PRICE: (data.data.PRICE*data.number),
      PAY_TYPE: this.state.payType,
      STATUS: 1,
      CID: data.data.CID,
      COMM: BuyerInfo.comment
    }
    fetch('http://localhost:3000/eb/buy/buyList' ,{
      method:'POST',
      mode: "cors",
      body: JSON.stringify(loginList), 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(results => {
      console.log(results.message)
    })
    this.setState({
      successPay: true
    })
  }
  //導頁
  makeBuyListLink = () => {
    if(localStorage.getItem('userId') !== null){
      return(
        <NavLink className="link" to={{pathname: '/center/order'}}>查看我的清單</NavLink>
      )
    }
    // return(<NavLink className="link" to={{pathname: '/register'}}>查看我的清單</NavLink>)
    return (
      <div  className="link" data-toggle="modal" data-target="#exampleModal">登入會員</div>
    )
  }
  render(){
    let none = this.state.successPay ? "" : "none"
    // console.log("data:"+this.state.data.data.CID)
    return(
      <React.Fragment>
        <div id="pro_buy" >
          <BuyFlow />
          <div id="buy_body80">
            <div className="body_l">
              <BuyerInfo getBuyerInfo={this.getBuyerInfo} refProp={this.buyerInfoRef} warnList={this.state.warnList}/>
              <PayType checkPayType={this.checkPayType} refProp={this.payTypeRef} warn={this.state.payType}/>
              <CancelRule agreeCheck={this.agreeCheck} refProp={this.cancelRuleRef} warn={this.state.agreeCheck}/>
              <div id="pay-btn" onClick={this.payCheck}>確認付款</div>
            </div>
            <div className="body_r">
              <ProDetail data={this.state.data} />
            </div>
          </div>

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <Register />
              </div>
            </div>
          </div>

          <div className={`success_pay ${none}`}>
            <div className="frame">
              <div className="img" style={{backgroundImage: `url(${require(`../../images/checked.svg`)})`}}></div>
              <h3>完成購買<i>!</i></h3>
              <div className="redirect">
                {this.makeBuyListLink()}
                <NavLink className="link" to={{pathname: '/proList', state: {str: `nav`, type: `nav`}}}>回到遊戲列表</NavLink>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default ProBuy