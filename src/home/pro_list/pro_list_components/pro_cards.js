import React, {Component} from 'react';
import './pro_cards.scss';


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
        <div id="pro_cards">
          <div className="card_rows">
            <div className="pro_card">
              <div className="workshop_logo"></div>
              <div className="pro_main_img">
                <div className="favor-btn"></div>
              </div>
              <div className="card_body">
                <h3>遊戲名</h3>
                {/* <comment /> */}
                <ul>
                  <li>宮廷劇情</li>
                  <li>宮廷劇情</li>
                  <li>宮廷劇情</li>
                </ul>
                <div className="enter-btn">查看更多</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProCards;