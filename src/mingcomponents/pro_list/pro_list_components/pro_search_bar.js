import React, {Component} from 'react';
import './pro_search_bar.scss';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      openCity: "",
      city: ">=1",
      nowCity: "選擇縣市",
      openCate: "",
      cate: ">=1",
      nowCate: "選擇類別",
      openPeople: "",
      people: "", 
      nowPeople: "選擇人數",
      openPrice: "",
      price: "",
      nowPrice: "價格範圍",
      text: "",
      textResults: [],
      keywordOpen: "",
      sort: "",
      type:"homeSearch"
    }
    
  }
  //執行搜尋
  onSearch = (evt) => {
    evt.preventDefault();
    console.log("city:" + this.state.city)
    console.log("cate:" + this.state.cate)
    console.log("people:" + this.state.people)
    console.log("price:" + this.state.price)
    console.log("text:" + this.state.text)
    console.log("sortStr" + this.state.sortStr)
    this.setState({
      type: "search"
    })
    this.props.search(this.state);
  }
  
  //type初始化
  typeChange = () => {
    if(this.props.type !== this.state.type){
      this.setState({
        nowCity: "選擇縣市",
        nowCate: "選擇類別",
        nowPeople: "選擇人數",
        nowPrice: "價格範圍",
        city: ">=1",
        cate: ">=1",
        people: "", 
        price: "",
        text: "",
        type: "search"
      })
    }
  }
  //縣市下拉選單
  openCity = () => {
    if(this.state.openCity === ""){
      this.setState({
        openCity: "open"
      })
    }else{
      this.setState({
        openCity: ""
      })
    }
  }
  
  //回傳縣市給state
  selCity = (evt) => {
    let city = evt.target.dataset.value;
    let nowCity = evt.target.dataset.text;
    // console.log(nowCity);
    
    this.setState({
      city: city,
      nowCity: nowCity
    })
    // console.log(this.state.city)
  }

  //分類下拉選單
  openCate = () => {
    if(this.state.openCate === ""){
      this.setState({
        openCate: "open"
      })
    }else{
      this.setState({
        openCate: ""
      })
    }
  }
  //回傳分類給state
  selCate = (evt) => {
    let cate = evt.target.dataset.value;
    let nowCate = evt.target.dataset.text;
    this.setState({
      cate: cate,
      nowCate: nowCate
    })
    console.log(this.state.cate);
  }

  //人數下拉選單
  openPeople = () => {
    if(this.state.openPeople === ""){
      this.setState({
        openPeople: "open"
      })
    }else{
      this.setState({
        openPeople: ""
      })
    }
  }
  //回傳人數給state
  selPeople = (evt) => {
    let people = evt.target.dataset.value;
    let nowPeople = evt.target.dataset.text;
    this.setState({
      people: people,
      nowPeople: nowPeople
    })
    console.log(this.state.people);
  }

  //價錢下拉選單
  openPrice = () => {
    if(this.state.openPrice === ""){
      this.setState({
        openPrice: "open"
      })
    }else{
      this.setState({
        openPrice: ""
      })
    }
  }
  //回傳價錢給state
  selPrice = (evt) => {
    let price = evt.target.dataset.value;
    let nowPrice = evt.target.dataset.text;
    this.setState({
      price: price,
      nowPrice: nowPrice
    })
    console.log(this.state.price);
  }

  //輸入搜尋bar
  searchBar = (evt) => {
    let text = evt.target.value;
    console.log(text);
    if(text === ""){
      this.setState({
        text: "",
        keywordOpen: "close"
      })
      return;
    }
    this.setState({
      text: text,
      keywordOpen: ""
    })
    fetch('http://localhost:3000/eb/pro_list/search/' + text,{
      method:'GET',
      mode: "cors",
    })
    .then(res=>res.json())
    .then(textResults => this.setState({
      textResults: textResults
    }))
    console.log(this.state.textResults)
  }

  //選擇推薦字
  keywordDown = (evt) => {
    let text = evt.target.dataset.text;
    console.log("Text:"+ text)
    this.setState({
      text: text,
      keywordOpen : "close"
    })
  }
  close = () => {
    this.setState({
      openCity : "",
      openCate: "",
      openPeople:"",
      openPrice:"",
      // keywordOpen : "close"
    })
    setTimeout(()=>{
      this.setState({
        keywordOpen : "close"
      })
    }, 100)
  }
  componentWillReceiveProps(){
    if(this.props.type !== this.state.type){
      this.setState({
        nowCity: "選擇縣市",
        nowCate: "選擇類別",
        nowPeople: "選擇人數",
        nowPrice: "價格範圍",
        city: ">=1",
        cate: ">=1",
        people: "", 
        price: "",
        text: "",
        type: "search"
      })
    }
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_search_bar">
          <div className="w80">
            <form className="input" onSubmit={this.onSearch}>
              <div id="search_input">
                <i className="fas fa-search"></i><input type="text" onChange={this.searchBar} value={this.state.text} tabIndex={0} onBlur={this.close} />
              </div>
              <div className="keyword">
                {this.state.textResults.map((text, i) =>
                  <div key={i} className={"text_results" + " " + this.state.keywordOpen} onClick={this.keywordDown} data-text={text.PRO_NAME}>{text.PRO_NAME}</div>
                )}
              </div>
            </form>
            <div id="sel_city" className={"sel" + " " + this.state.openCity} tabIndex={0} onClick={this.openCity} onBlur={this.close}>
              <div className="first" data-value=">=1" >{this.state.nowCity}</div>
              <div className={"option" + " " + this.state.openCity}>
                <div className="" data-value=">=1" data-text="不限" onClick={this.selCity}>不限</div>
                <div className="" data-value="=1" data-text="台北市" onClick={this.selCity}>台北市</div>
                <div className='' data-value="=2" data-text="新北市" onClick={this.selCity}>新北市</div>
                <div className='' data-value="=4" data-text="桃園市" onClick={this.selCity}>桃園市</div>
                <div className='' data-value="=5" data-text="新竹市" onClick={this.selCity}>新竹市</div>
                <div className='' data-value="=8" data-text="台中市" onClick={this.selCity}>台中市</div>
                <div className='' data-value="=10" data-text="南投縣" onClick={this.selCity}>南投縣</div>
                <div className='' data-value="=12" data-text="嘉義市" onClick={this.selCity}>嘉義市</div>
                <div className='' data-value="=14" data-text="台南市" onClick={this.selCity}>台南市</div>
                <div className='' data-value="=15" data-text="高雄市" onClick={this.selCity}>高雄市</div>
                <div className='' data-value="=19" data-text="宜蘭縣" onClick={this.selCity}>宜蘭縣</div>
              </div>
              {/* <option data-value="=22">全台</option> */}
            </div>

            <div id="sel_cate" className={"sel" + " " + this.state.openCate} onClick={this.openCate} tabIndex={0} onBlur={this.close}>
              <div className="first" data-value=">=1">{this.state.nowCate}</div>
              <div className={"option" + " " + this.state.openCate}>
                <div className="" data-value="" data-text="不限" onClick={this.selCate}>不限</div>
                <div className="" data-value="&& (f.`feature1` =1 || f.`feature2` =1 || f.`feature3` =1) " data-text="新手入門" onClick={this.selCate}>新手入門</div>
                <div className="" data-value="&& (f.`feature1` =2 || f.`feature2` =2 || f.`feature3` =2) " data-text="中度玩家" onClick={this.selCate}>中度玩家</div>
                <div className="" data-value="&& (f.`feature1` =3 || f.`feature2` =3 || f.`feature3` =3) " data-text="重度解謎" onClick={this.selCate}>重度解謎</div>
                <div className="" data-value="&& (f.`feature1` =4 || f.`feature2` =4 || f.`feature3` =4) " data-text="偵探推理" onClick={this.selCate}>偵探推理</div>
                <div className="" data-value="&& (f.`feature1` =5 || f.`feature2` =5 || f.`feature3` =5) " data-text="機關重重" onClick={this.selCate}>機關重重</div>
                <div className="" data-value="&& (f.`feature1` =6 || f.`feature2` =6 || f.`feature3` =6) " data-text="劇情厲害" onClick={this.selCate}>劇情厲害</div>
                <div className="" data-value="&& (f.`feature1` =7 || f.`feature2` =7 || f.`feature3` =7) " data-text="場景逼真" onClick={this.selCate}>場景逼真</div>
                <div className="" data-value="&& (f.`feature1` =8 || f.`feature2` =8 || f.`feature3` =8) " data-text="輕鬆歡樂" onClick={this.selCate}>輕鬆歡樂</div>
                <div className="" data-value="&& (f.`feature1` =9 || f.`feature2` =9 || f.`feature3` =9) " data-text="恐怖驚悚" onClick={this.selCate}>恐怖驚悚</div>
                <div className="" data-value="&& (f.`feature1` =10 || f.`feature2` =10 || f.`feature3` =10) " data-text="緊張刺激" onClick={this.selCate}>緊張刺激</div>
                <div className="" data-value="&& (f.`feature1` =11 || f.`feature2` =11 || f.`feature3` =11) " data-text="勾心鬥角" onClick={this.selCate}>勾心鬥角</div>
                <div className="" data-value="&& (f.`feature1` =12 || f.`feature2` =12 || f.`feature3` =12) " data-text="團隊合作" onClick={this.selCate}>團隊合作</div>
                <div className="" data-value="&& (f.`feature1` =13 || f.`feature2` =13 || f.`feature3` =13) " data-text="親子同遊" onClick={this.selCate}>親子同遊</div>
              </div>
            </div>

            <div id="sel_people" className={"sel" + " " + this.state.openPeople} onClick={this.openPeople} tabIndex={0} onBlur={this.close}>
              <div className="first" data-value="">{this.state.nowPeople}</div>
              <div className={"option" + " " + this.state.openPeople}>
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
              </div>
            </div>

            <div id="sel_price" className={"sel" + " " + this.state.openPrice} onClick={this.openPrice} tabIndex={0} onBlur={this.close}>
              <div className="first" data-value="5000">{this.state.nowPrice}</div>
              <div className={"option" + " " + this.state.openPrice}>
                <div className="" data-value="" data-text="全部" onClick={this.selPrice}>全部</div>
                <div className="" data-value="&& p.`PRICE` <= 300" data-text="300以下" onClick={this.selPrice}>300以下</div>
                <div className="" data-value="&& p.`PRICE` <= 450" data-text="450以下" onClick={this.selPrice}>450以下</div>
                <div className="" data-value="&& p.`PRICE` <= 600" data-text="600以下" onClick={this.selPrice}>600以下</div>
                <div className="" data-value="&& p.`PRICE` >= 600" data-text="600以上" onClick={this.selPrice}>600以上</div>
              </div>
            </div>
            <div id="search-btn" onClick={this.onSearch}>搜尋</div>
          </div>
        </div>
      </React.Fragment>
    )
  }


}

export default SearchBar;