import React, {Component} from 'react'
import './pro_detail.scss'

class ProDetail extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <React.Fragment>
        <div id="pro_detail">
          <div className="pro_img" style={{}}></div>
          <div className="detail_frame">
            <h3>商品名</h3>
            <p>您選擇的日期與人數</p>
            <div className="game_date"></div>
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
                    <td>4人</td>
                    <td>$500</td>
                    <td>$2000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="game_address">地點:</div>
            <h4>總價：$2000</h4>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default ProDetail