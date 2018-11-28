import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './pro_cards.scss';


class ProCards extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
    
  }

  makeSpace = () => {

    let spaceNumber =this.props.products.length % 4 ;
    if(spaceNumber === 0){
      return null
    }
    let space = [];
    for(let i = 1; i <= (4-spaceNumber); i++){
      space.push(<div className="pro_card_none" key={`n${i}`}>{i}</div>);
    }
    return space
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_cards">
          <div className="card_rows">
            {this.props.products.map(card =>
                <NavLink className="pro_card" key={card.PRO_SEQ} to={{
                  pathname: `/products/${card.PRO_SEQ}`,
                  state: {id: card}
                }}>
                  <div className="workshop_logo" style={{ backgroundImage: `url(${require('../../../images/c_img/'+ card.c_logo)})`}}>
                    {/* <img src={require(`../../../images/c_img/${card.c_logo}`)}/> */}
                  </div>
                  <div className="card_frame">
                    <div className="pro_main_img" style={{ backgroundImage: `url(${require('../../../images/p_img/'+ card.IMG_NAME)})`}}>
                      <div className="favor-btn"></div>
                    </div>
                    <div className="card_body">
                      <div className="title_div">
                        <h3>{card.PRO_NAME}</h3>
                      </div>
                      {/* <comment /> */}
                      <div>評分%%%%</div>
                      <ul>
                        <li>宮廷劇情</li>
                        <li>宮廷劇情</li>
                        <li>宮廷劇情</li>
                      </ul>
                      {/* <div className="enter-btn"><p>查看更多</p></div> */}
                    </div>
                    <div className="card_foot">
                      <div className="card_city">{card.city_name}</div>
                      <div className="card_time">{card.GAME_TIME}分鐘</div>
                      <div className="card_price">$ {card.PRICE}起</div>
                    </div>
                  </div>
                </NavLink>
            )}
            {this.makeSpace()}
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProCards;