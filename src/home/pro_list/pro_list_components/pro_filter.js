import React, {Component} from 'react';
import './pro_filter.scss';

class ProFilter extends Component{
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
        <div id="pro_filter">
          <div>
            <h4>所在地區</h4>
            <div id="city_filter" className="filter">
              <div className="" data-value=">=1" data-text="" onClick={this.selCity}>全部</div>
              <div className='' data-value="=19" data-text="宜蘭縣" onClick={this.selCity}>宜蘭縣</div>
              <div className="" data-value="=1" data-text="台北市" onClick={this.selCity}>台北市</div>
              <div className='' data-value="=2" data-text="新北市" onClick={this.selCity}>新北市</div>
              <div className='' data-value="=4" data-text="桃園市" onClick={this.selCity}>桃園市</div>
              <div className='' data-value="=5" data-text="新竹市" onClick={this.selCity}>新竹市</div>
              <div className='' data-value="=8" data-text="台中市" onClick={this.selCity}>台中市</div>
              <div className='' data-value="=10" data-text="南投縣" onClick={this.selCity}>南投縣</div>
              <div className='' data-value="=12" data-text="嘉義市" onClick={this.selCity}>嘉義市</div>
              <div className='' data-value="=14" data-text="台南市" onClick={this.selCity}>台南市</div>
              <div className='' data-value="=15" data-text="高雄市" onClick={this.selCity}>高雄市</div>
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>遊戲類型</h4>
            <div id="cate_filter" className="filter">
              <div className="" data-value=">=1" data-text="全部" onClick={this.selCate}>全部</div>
              <div className="" data-value="=1" data-text="新手入門" onClick={this.selCate}>新手入門</div>
              <div className="" data-value="=2" data-text="中度玩家" onClick={this.selCate}>中度玩家</div>
              <div className="" data-value="=3" data-text="重度解謎" onClick={this.selCate}>重度解謎</div>
              <div className="" data-value="=4" data-text="偵探推理" onClick={this.selCate}>偵探推理</div>
              <div className="" data-value="=5" data-text="機關重重" onClick={this.selCate}>機關重重</div>
              <div className="" data-value="=6" data-text="劇情厲害" onClick={this.selCate}>劇情厲害</div>
              <div className="" data-value="=7" data-text="場景逼真" onClick={this.selCate}>場景逼真</div>
              <div className="" data-value="=8" data-text="輕鬆歡樂" onClick={this.selCate}>輕鬆歡樂</div>
              <div className="" data-value="=9" data-text="恐怖驚悚" onClick={this.selCate}>恐怖驚悚</div>
              <div className="" data-value="=10" data-text="緊張刺激" onClick={this.selCate}>緊張刺激</div>
              <div className="" data-value="=11" data-text="勾心鬥角" onClick={this.selCate}>勾心鬥角</div>
              <div className="" data-value="=12" data-text="團隊合作" onClick={this.selCate}>團隊合作</div>
              <div className="" data-value="=13" data-text="親子同遊" onClick={this.selCate}>親子同遊</div>
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>適合人數</h4>
            <div id="people_filter" className="filter">
              <div className="" data-value="" data-text="不限" onClick={this.selPeople}>不限</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 1 && 1 <= p.`PEOPLE_MAX`" data-text="1人" onClick={this.selPeople}>1人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 2 && 2 <= p.`PEOPLE_MAX`" data-text="2人" onClick={this.selPeople}>2人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 3 && 3 <= p.`PEOPLE_MAX`" data-text="3人" onClick={this.selPeople}>3人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 4 && 4 <= p.`PEOPLE_MAX`" data-text="4人" onClick={this.selPeople}>4人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 5 && 5 <= p.`PEOPLE_MAX`" data-text="5人" onClick={this.selPeople}>5人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 6 && 6 <= p.`PEOPLE_MAX`" data-text="6人" onClick={this.selPeople}>6人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 7 && 7 <= p.`PEOPLE_MAX`" data-text="7人" onClick={this.selPeople}>7人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 8 && 8 <= p.`PEOPLE_MAX`" data-text="8人" onClick={this.selPeople}>8人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 9 && 9 <= p.`PEOPLE_MAX`" data-text="9人" onClick={this.selPeople}>9人</div>
              <div className="" data-value="&& p.`PEOPLE_MIN` <= 10 && 10 <= p.`PEOPLE_MAX`" data-text="10人" onClick={this.selPeople}>10人</div>
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>價格範圍</h4>
            <div id="price_filter" className="filter">
              <div className="" data-value="5000" data-text="不限" onClick={this.selPrice}>不限</div>
              <div className="" data-value="300" data-text="300以下" onClick={this.selPrice}>300以下</div>
              <div className="" data-value="450" data-text="450以下" onClick={this.selPrice}>450以下</div>
              <div className="" data-value="600" data-text="600以下" onClick={this.selPrice}>600以下</div>
              <div className="" data-value="750" data-text="600以上" onClick={this.selPrice}>600以上</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProFilter;