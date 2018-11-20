import React, {Component} from 'react';
import './pro_card.scss';


class ProCards extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }
  componentDidUpdate(){
        
  }

  render(){
    return(
      <React.Fragment>
        <div className="pro_card">
          <div className="workshop_logo"></div>
          <div className="card_frame">
            <div className="pro_main_img">
              <div className="favor-btn"></div>
            </div>
            <div className="card_body">
              <h3>遊戲名</h3>
              {/* <comment /> */}<br />
              <ul>
                <li>宮廷劇情</li>
                <li>宮廷劇情</li>
                <li>宮廷劇情</li>
              </ul>
              <div className="enter-btn"><p>查看更多</p></div>
            </div>
            <div className="card_foot">
              <div className="card_city">台北市</div>
              <div className="card_time">100分鐘</div>
              <div className="card_price">$ 600起</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProCards;