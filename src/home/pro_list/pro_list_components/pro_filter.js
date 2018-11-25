import React, {Component} from 'react';
import './pro_filter.scss';

const CITY_LIST = [
  {id:"19", name: "宜蘭縣"},
  {id:"1", name: "台北市"},
  {id:"2", name: "新北市"},
  {id:"4", name: "桃園市"},
  {id:"5", name: "新竹市"},
  {id:"8", name: "台中市"},
  {id:"10", name: "南投縣"},
  {id:"12", name: "嘉義市"},
  {id:"14", name: "台南市"},
  {id:"15", name: "高雄市"},
]

const myFetch = async (url) => {
  let res = await fetch (url, {
    method:'GET',
    mode: "cors",
      // body: JSON.stringify(data),
      // headers: new Headers({
      //   'Content-Type':'application/json'
      // })
  })
  let result = await res.json()
  return result
}

class ProFilter extends Component{
  constructor(props){

    super(props)
    this.state = {
      checkCityAll: false,
      checkCity: "",
      cityCheckList: CITY_LIST.map(c => false)
    }

  }
  search = async (query) => {
    if (!query) {
      return
    }
    let data = await myFetch('http://localhost:3000/eb/pro_list/filter/' + query)
    console.log(data)
  }
  makeQueryString = (list) => {
    // let cityCheckList = this.state.cityCheckList
    let queries = []
    CITY_LIST.map((city, index) => {
      if (list[index]) {
        queries.push("m.`city_id`= " + city.id)
      }
      return ''
    })
    return queries.join(' || ')
  }
  cityAll = () => {
    let check
    if (!this.state.checkCityAll) {
      check = true
    } else {
      check = false
    }
    let list = this.state.cityCheckList.map(() => check)
    let query = this.makeQueryString(list)
    let search = this.search
    this.setState({
      checkCityAll: check,
      cityCheckList: list
    }, () => {
      search(query)
    })
    // if(this.state.checkCityAll === ""){
    //   this.setState({
    //     checkCityAll: "checked",
    //     checkCity: "checked"
    //   })
    // }else{
    //   this.setState({
    //     checkCityAll: "",
    //     checkCity: ""
    //   })
    // }
  }
  multiCheck = (index) => {
    let list = this.state.cityCheckList.slice()
    list[index] = !list[index]
    let all = true
    list.map(l => all = all && l)
    let query = this.makeQueryString(list)
    let search = this.search
    this.setState({
      cityCheckList: list,
      checkCityAll: all
    }, () => {
      search(query)
    })
    // if(evt.target.className === "checked"){
    //   evt.target.className="";
    //   this.setState({
    //     checkCityAll: ""
    //   })
    // }else{
    //   evt.target.className="checked"
      
    // }
  }
  makeCityFilter = () => {
    let {
      cityCheckList
    } = this.state
    let filter = CITY_LIST.map((city, index) => {
      let className = cityCheckList[index] ? "checked" : ""
      return(
        <div
          key={`尋找黑桃${index}`}
          className={className}
          data-value={city.id}
          data-text={city.name}
          onClick={() => {
            this.multiCheck(index)
          }}>
            {city.name}
          </div>
      )
    })
    return filter
  }

  render(){
    let checkAllClassName = this.state.checkCityAll ? "checked" : ""
    return(
      <React.Fragment>
        <div id="pro_filter">
          <div>
            <h4>所在地區</h4>
            <div id="city_filter" className="filter">
              <div className={checkAllClassName} data-value=">=1" data-text="" onClick={this.cityAll}>全部</div>
              {this.makeCityFilter()}
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>遊戲類型</h4>
            <div id="cate_filter" className="filter">
              <div className={this.state.check} data-value=">=1" data-text="全部" onClick={this.selCate}>全部</div>
              <div className={this.state.check} data-value="=1" data-text="新手入門" onClick={this.selCate}>新手入門</div>
              <div className={this.state.check} data-value="=2" data-text="中度玩家" onClick={this.selCate}>中度玩家</div>
              <div className={this.state.check} data-value="=3" data-text="重度解謎" onClick={this.selCate}>重度解謎</div>
              <div className={this.state.check} data-value="=4" data-text="偵探推理" onClick={this.selCate}>偵探推理</div>
              <div className={this.state.check} data-value="=5" data-text="機關重重" onClick={this.selCate}>機關重重</div>
              <div className={this.state.check} data-value="=6" data-text="劇情厲害" onClick={this.selCate}>劇情厲害</div>
              <div className={this.state.check} data-value="=7" data-text="場景逼真" onClick={this.selCate}>場景逼真</div>
              <div className={this.state.check} data-value="=8" data-text="輕鬆歡樂" onClick={this.selCate}>輕鬆歡樂</div>
              <div className={this.state.check} data-value="=9" data-text="恐怖驚悚" onClick={this.selCate}>恐怖驚悚</div>
              <div className={this.state.check} data-value="=10" data-text="緊張刺激" onClick={this.selCate}>緊張刺激</div>
              <div className={this.state.check} data-value="=11" data-text="勾心鬥角" onClick={this.selCate}>勾心鬥角</div>
              <div className={this.state.check} data-value="=12" data-text="團隊合作" onClick={this.selCate}>團隊合作</div>
              <div className={this.state.check} data-value="=13" data-text="親子同遊" onClick={this.selCate}>親子同遊</div>
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>適合人數</h4>
            <div id="people_filter" className="filter">
              <div className={this.state.check} data-value="" data-text="不限" onClick={this.selPeople}>不限</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 1 && 1 <= p.`PEOPLE_MAX`" data-text="1人" onClick={this.selPeople}>1人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 2 && 2 <= p.`PEOPLE_MAX`" data-text="2人" onClick={this.selPeople}>2人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 3 && 3 <= p.`PEOPLE_MAX`" data-text="3人" onClick={this.selPeople}>3人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 4 && 4 <= p.`PEOPLE_MAX`" data-text="4人" onClick={this.selPeople}>4人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 5 && 5 <= p.`PEOPLE_MAX`" data-text="5人" onClick={this.selPeople}>5人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 6 && 6 <= p.`PEOPLE_MAX`" data-text="6人" onClick={this.selPeople}>6人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 7 && 7 <= p.`PEOPLE_MAX`" data-text="7人" onClick={this.selPeople}>7人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 8 && 8 <= p.`PEOPLE_MAX`" data-text="8人" onClick={this.selPeople}>8人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 9 && 9 <= p.`PEOPLE_MAX`" data-text="9人" onClick={this.selPeople}>9人</div>
              <div className={this.state.check} data-value="&& p.`PEOPLE_MIN` <= 10 && 10 <= p.`PEOPLE_MAX`" data-text="10人" onClick={this.selPeople}>10人</div>
              <div className="ghost"></div>
            </div>
          </div>
          <div>
            <h4>價格範圍</h4>
            <div id="price_filter" className="filter">
              <div className={this.state.check} data-value="5000" data-text="不限" onClick={this.selPrice}>不限</div>
              <div className={this.state.check} data-value="300" data-text="300以下" onClick={this.selPrice}>300以下</div>
              <div className={this.state.check} data-value="450" data-text="450以下" onClick={this.selPrice}>450以下</div>
              <div className={this.state.check} data-value="600" data-text="600以下" onClick={this.selPrice}>600以下</div>
              <div className={this.state.check} data-value="750" data-text="600以上" onClick={this.selPrice}>600以上</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProFilter;