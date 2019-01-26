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
  {id:"15", name: "高雄市"}
]
const CATE_LIST = [
  {id:"1", name: "新手入門"},
  {id:"2", name: "中度玩家"},
  {id:"3", name: "重度解謎"},
  {id:"4", name: "偵探推理"},
  {id:"5", name: "機關重重"},
  {id:"6", name: "劇情厲害"},
  {id:"7", name: "場景逼真"},
  {id:"8", name: "輕鬆歡樂"},
  {id:"9", name: "恐怖驚悚"},
  {id:"10", name: "緊張刺激"},
  {id:"11", name: "勾心鬥角"},
  {id:"12", name: "團隊合作"},
  {id:"13", name: "親子同遊"}
]
const PEO_LIST = [
  {id:"1", name: "1人"},
  {id:"2", name: "2人"},
  {id:"3", name: "3人"},
  {id:"4", name: "4人"},
  {id:"5", name: "5人"},
  {id:"6", name: "6人"},
  {id:"7", name: "7人"},
  {id:"8", name: "8人"},
  {id:"9", name: "9人"},
  {id:"10", name: "10人"}
]
const PRICE_LIST = [
  {id:" && p.`PRICE` >= 0 ", name: "不限"},
  {id:" && p.`PRICE` <= 300 ", name:"300以下"},
  {id:" && p.`PRICE` <= 450 ", name:"450以下"},
  {id:" && p.`PRICE` <= 600 ", name:"600以下"},
  {id:" && p.`PRICE` >= 600 ", name:"600以上"}
]
// const myFetch = async (url) => {
//   let res = await fetch (url, {
//     method:'GET',
//     mode: "cors",
//       body: JSON.stringify(data),
//       headers: new Headers({
//         'Content-Type':'application/json'
//       })
//   })
//   let result = await res.json()
//   return result
// }
class ProFilter extends Component{
  constructor(props){

    super(props)
    this.state = {
      checkCityAll: false,
      checkCity: "",
      cityCheckList: CITY_LIST.map(c => false),
      checkCateAll: false,
      checkCate:"",
      cateCheckList: CATE_LIST.map(c => false),
      checkPeoAll: false,
      checkPeo:"",
      peoCheckList: CATE_LIST.map(c => false),
      price: "",
      priceCheckList: PRICE_LIST.map(c => false),
      filterOpen: false,
      sort: "",
      sortOpen: "",
      nowSort: "排序方式",
      type: "search"
    }
  }
  // search = async (query) => {
  //   console.log(query)
  //   if (!query) {
  //     return
  //   }
  //   let data = await myFetch('http://localhost:3000/eb/pro_list/filter/' + query)
  //   console.log(data)
  // }
  makeQueryString = () => {
    // let cityCheckList = this.state.cityCheckList
    let cities = this.makeCityString()
    let categories = this.makeCateString()
    let people = this.makePeoString()
    let price = this.state.price
    let sort = this.state.sort
    console.log(cities + categories + people + price + sort)
    let str = cities + categories + people + price 
    if(!str){
      return
    }
    this.setState({
      type: "filter"
    })
    this.props.filter(str + sort)
  }
  makeCateString = () => {
    let  categories = []
    CATE_LIST.map((cate, index) => {
      if (this.state.cateCheckList[index]) {
        categories.push("(f.`feature1`= " + cate.id + "|| f.`feature2`=" + cate.id + "|| f.`feature3`=" + cate.id + ") ")
      }
    })
    let str
    if(categories.length === 0 || categories.length === CATE_LIST.length){
      str = ""
    }else{
      str = `&& (${categories.join(' || ')}) `
    }
    return str
  }
  makeCityString = () => {
    let cities = []
    CITY_LIST.map((city, index) => {
      if (this.state.cityCheckList[index]) {
        cities.push("m.`city_id`= " + city.id)
      }
    })
    let str
    if(cities.length === 0 || cities.length === CITY_LIST.length){
      str = ""
    }else{
      str = `&& (${cities.join(' || ')}) `
    }
    return str
  }
  cityAll = () => {
    let check
    if (!this.state.checkCityAll) {
      check = true
    } else {
      check = false
    }
    let list = this.state.cityCheckList.map(() => check)
    this.setState({
      checkCityAll: check,
      cityCheckList: list
    }
    , () => {
      this.makeQueryString()
    })
  }
  cityClick = (index) => {
    let list = this.state.cityCheckList.slice()
    list[index] = !list[index]
    let all = true
    list.map(l => all = all && l)
    this.setState({
      cityCheckList: list,
      checkCityAll: all
    }, () => {
      this.makeQueryString()
    })
  }
  makeCityFilter = () => {
    let {
      cityCheckList
    } = this.state
    let filter = CITY_LIST.map((city, index) => {
      let className = cityCheckList[index] ? "checked" : ""
      return(
        <div
          key={`cityf${index}`}
          className={className}
          data-value={city.id}
          data-text={city.name}
          onClick={() => {
            this.cityClick(index)
          }}>
            {city.name}
          </div>
      )
    })
    return filter
  }
  cateAll = () => {
    let check
    if (!this.state.checkCateAll) {
      check = true
    } else {
      check = false
    }
    let list = this.state.cateCheckList.map(() => check)
    this.setState({
      checkCateAll: check,
      cateCheckList: list
    }, () => {
      this.makeQueryString()
    })
  }
  cateClick = (index) => {
    let list = this.state.cateCheckList.slice()
    list[index] = !list[index]
    let all = true
    list.map(l => all = all && l)

    this.setState({
      cateCheckList: list,
      checkCateAll: all
    }, () => {
      this.makeQueryString()
    })
  }
  makeCateFilter = () => {
    let{
      cateCheckList
    }= this.state;
    let filter = CATE_LIST.map((cate, index) => {
        let className = cateCheckList[index] ? "checked" : "";
        return(
          <div
          key={`catef${index}`}
          className={className}
          data-value={cate.id}
          data-text={cate.name}
          onClick={() => {
            this.cateClick(index)
          }}>
            {cate.name}
          </div>
        )
    })
    return filter;
  }
  peoAll = () => {
    let check
    if (!this.state.checkPeoAll) {
      check = true
    } else {
      check = false
    }
    let list = this.state.peoCheckList.map(() => check)
    this.setState({
      checkPeoAll: check,
      peoCheckList: list,
    }, () => {
      this.makeQueryString()
    })
  }
  peoClick = (index) => {
    let list = this.state.peoCheckList.slice()
    list[index] = !list[index]
    let all = true
    list.map(l => all = all && l)
    this.setState({
      peoCheckList: list,
      checkPeoAll: all,
    }, () => {
      this.makeQueryString()
    })
  }
  makePeoString = () => {
    let people = []
    PEO_LIST.map((peo, index) => {
      if(this.state.peoCheckList[index]){
        people.push(peo.id)
      }
    })
    let str = ""
    if(people.length === 0 || people.length === PEO_LIST.length){
      return ''
    }else{
      str = "&& (p.`PEOPLE_MIN` <= " + people[0] + " && " + people[people.length-1] + " <= p.`PEOPLE_MAX`) "
    }
    return str
  }
  makePeoFilter = () => {
    let {
      peoCheckList
    } = this.state
    let filter = PEO_LIST.map((peo, index) => {
      let className = peoCheckList[index] ? "checked" : ""
      return(
        <div
          key={`peof${index}`}
          className={className}
          data-value={peo.id}
          data-text={peo.name}
          onClick={() => {
            this.peoClick(index)
          }}>
            {peo.name}
          </div>
      )
    })
    return filter
  }
  priceClick = (index) => {
    let list = this.state.priceCheckList.slice()
    list = list.map( c => c = false)
    list[index] = !list[index]
    let price = PRICE_LIST[index].id
    if(!list[index]){
      price = ""
    }
    console.log("list:"+list)
    // console.log("[price]:"+price)
    this.setState({
      priceCheckList: list,
      price: price
    }, () => {
      this.makeQueryString()
    })
  }
  makePriceFilter = () => {
    let {priceCheckList} = this.state
    let filter = PRICE_LIST.map((price,index) => {
      let className = priceCheckList[index] ? "checked" : ""
      return (
        <div
          key={`pricef${index}`}
          className={className}
          data-value={price.id}
          data-text={price.name}
          onClick={() => this.priceClick(index)}
        >{price.name}</div>
      )
    })
    return filter
  }
  displayRes = () => {
    if(this.props.count === 0){
      return "沒有符合搜尋條件的遊戲，您可以試試進階搜尋"
    }
    return `找到${this.props.count}款遊戲`
  }
  filterOpen = () => {
    let {filterOpen} = this.state
    filterOpen = !filterOpen
    this.setState({
      filterOpen
    })
  }
  sortOpen = () => {
    if(this.state.sortOpen === ""){
      this.setState({
        sortOpen: "open"
      })
      return
    }
    this.setState({
      sortOpen: ""
    })
  }
  sortClose = () => {
    this.setState({
      sortOpen: ""
    })
  }
  selSort = (evt) => {
    let sort = evt.target.dataset.value;
    let nowSort = evt.target.dataset.text;
    this.setState({
      sort,
      nowSort
    }, () => {this.makeQueryString()})
    this.props.sort(sort)
  }
  componentWillReceiveProps(){
    // if(this.props.type !== this.state.type && this.props.type !== "filter"){
    if(this.props.type !== this.state.type){  
      this.setState({
        checkCityAll: false,
        checkCity: "",
        cityCheckList: CITY_LIST.map(c => false),
        checkCateAll: false,
        checkCate:"",
        cateCheckList: CATE_LIST.map(c => false),
        checkPeoAll: false,
        checkPeo:"",
        peoCheckList: CATE_LIST.map(c => false),
        price: "",
        priceCheckList: PRICE_LIST.map(c => false),
        type: "filter"
      })
    }
  }
  render(){
    let cityAllClassName = this.state.checkCityAll ? "checked" : ""
    let cateAllClassName = this.state.checkCateAll ? "checked" : ""
    let peoAllClassName = this.state.checkPeoAll ? "checked" : ""
    let filtersClassName = this.state.filterOpen ? "" : "filter_open"
    return(
      <React.Fragment>
        <div id="pro_filter">
          <div id="pro_filter_btns">
            <h3 id="f_res">{this.displayRes()}</h3>
            <div className={`advance_search-btn ${filtersClassName}`} onClick={this.filterOpen}>進階搜尋</div>
            <div id="pro_sort" onClick={this.sortOpen} tabIndex={0} onBlur={this.sortClose}>
              <div className="first">{this.state.nowSort}</div>
              <div className={`option ${this.state.sortOpen}`}>
                <div data-value=" ORDER BY p.`HOT_INDEX` DESC " data-text="最受歡迎" onClick={this.selSort}>最受歡迎</div>
                <div data-value=" ORDER BY tc.`rating` DESC " data-text="評價最高" onClick={this.selSort}>評價最高</div>
                <div data-value=" ORDER BY p.`PRICE` " data-text="價格由低到高" onClick={this.selSort}>價格由低到高</div>
                <div data-value=" ORDER BY p.`PRICE` DESC " data-text="價格由高到低" onClick={this.selSort}>價格由高到低</div>
              </div>
            </div>
          </div>
          <div id="filters" className={filtersClassName}>
            <div className="f-div">
              <h4>所在地區</h4>
              <div id="city_filter" className="filter">
                <div className={cityAllClassName} data-value=">=1" data-text="" onClick={this.cityAll}>全部</div>
                {this.makeCityFilter()}
                <div className="ghost"></div>
              </div>
            </div>
            <div className="f-div">
              <h4>遊戲類型</h4>
              <div id="cate_filter" className="filter">
                <div className={cateAllClassName} data-value=">=1" data-text="全部" onClick={this.cateAll}>全部</div>
                {this.makeCateFilter()}
                <div className="ghost"></div>
              </div>
            </div>
            <div className="f-div">
              <h4>適合人數</h4>
              <div id="people_filter" className="filter">
                <div className={peoAllClassName} data-value="" data-text="不限" onClick={this.peoAll}>不限</div>
                {this.makePeoFilter()}
                <div className="ghost"></div>
              </div>
            </div>
            <div className="f-div">
              <h4>價格範圍</h4>
              <div id="price_filter" className="filter">
                {this.makePriceFilter()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProFilter;