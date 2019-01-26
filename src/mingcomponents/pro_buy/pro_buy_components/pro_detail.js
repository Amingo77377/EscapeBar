import React, {Component} from 'react'
import './pro_detail.scss'

class ProDetail extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    let props = this.props.data
    // ${new Date(date.DATE).getFullYear()}${new Date(date.DATE).getMonth()}${new Date(date.DATE)
    let year = new Date(props.nowDate).getFullYear()
    let month = new Date(props.nowDate).getMonth()
    let day = new Date(props.nowDate).getDate()
    let week = ["日", "一", "二", "三", "四", "五", "六"]
    week = week[new Date(props.nowDate).getDay()]
    return(
      <React.Fragment>
        <div id="pro_detail">
          <div className="pro_img" style={{backgroundImage: `url(${require('../../../images/p_img/'+ props.data.IMG_NAME)})`}}></div>
          <div className="detail_frame">
            <h3>{props.data.PRO_NAME}</h3>
            <p>您選擇的日期與人數</p>
            <div className="game_date">
              <div className="date">{`${year} 年 ${month+1} 月 ${day} 日`}</div>
              <div className="date">星期{week + "  " + props.timeZone}</div>
            </div>
            <div className="number_price">
              <table>
                <thead>
                  <tr>
                    <th>方案</th>
                    <th>人數</th>
                    <th>單價</th>
                    <th>小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>平日場</td>
                    <td>{props.number}人</td>
                    <td>${props.data.PRICE}</td>
                    <td>${props.data.PRICE * props.number}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="game_address">地點：{props.data.s_add}</div>
            <h4><span>總價：</span>${props.data.PRICE * props.number}</h4>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default ProDetail