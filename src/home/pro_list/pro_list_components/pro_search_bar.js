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
      price: "5000",
      nowPrice: "價格範圍"

    }
    
  }
  onSearch = (evt) => {
    this.props.search(this.state);
    evt.preventDefault();
  }

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
    
  selCity = (evt) => {
    let city = evt.target.dataset.value;
    let nowCity = evt.target.dataset.text;
    console.log(nowCity);
    
    this.setState({
      city: city,
      nowCity: nowCity
    })
    console.log(this.state.city)
  }

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

  selCate = (evt) => {
    let cate = evt.target.dataset.value;
    let nowCate = evt.target.dataset.text;
    this.setState({
      cate: cate,
      nowCate: nowCate
    })
    console.log(this.state.cate);
  }

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
  
  selPeople = (evt) => {
    let people = evt.target.dataset.value;
    let nowPeople = evt.target.dataset.text;
    this.setState({
      people: people,
      nowPeople: nowPeople
    })
    console.log(this.state.people);
  }

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

  selPrice = (evt) => {
    let price = evt.target.dataset.value;
    let nowPrice = evt.target.dataset.text;
    this.setState({
      price: price,
      nowPrice: nowPrice
    })
    console.log(this.state.price);
  }

  render(){
    return(
      <React.Fragment>
        <div id="pro_search_bar">
          <form>
            <div id="search_input">
                <i className="fas fa-search"></i><input />
            </div>
          </form>
            <div id="sel_city" className={"sel" + " " + this.state.openCity} onClick={this.openCity}>
              <div className="first" data-value=">=1" >{this.state.nowCity}</div>
              <div className={"option" + " " + this.state.openCity}>
                <div className="" data-value=">=1" data-text="不限" onClick={this.selCity}>不限</div>
                <div className="" data-value="1" data-text="台北市" onClick={this.selCity}>台北市</div>
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

            <div id="sel_cate" className={"sel" + " " + this.state.openCate} onClick={this.openCate}>
              <div className="first" data-value=">=1">{this.state.nowCate}</div>
              <div className={"option" +" " + this.state.openCate}>
                <div className="" data-value=">=1" data-text="不限" onClick={this.selCate}>不限</div>
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
              </div>
            </div>

            <div id="sel_people" className={"sel" + " " + this.state.openPeople} onClick={this.openPeople}>
              <div className="first" data-value="">{this.state.nowPeople}</div>
              <div className={"option" +" " + this.state.openPeople}>
                <div className="" data-value="" data-text="不限" onClick={this.selPeople}>不限</div>
                <div className="" data-value="1" data-text="1人" onClick={this.selPeople}>1人</div>
                <div className="" data-value="2" data-text="2人" onClick={this.selPeople}>2人</div>
                <div className="" data-value="3" data-text="3人" onClick={this.selPeople}>3人</div>
                <div className="" data-value="4" data-text="4人" onClick={this.selPeople}>4人</div>
                <div className="" data-value="5" data-text="5人" onClick={this.selPeople}>5人</div>
                <div className="" data-value="6" data-text="6人" onClick={this.selPeople}>6人</div>
                <div className="" data-value="7" data-text="7人" onClick={this.selPeople}>7人</div>
                <div className="" data-value="8" data-text="8人" onClick={this.selPeople}>8人</div>
                <div className="" data-value="9" data-text="9人" onClick={this.selPeople}>9人</div>
                <div className="" data-value="10" data-text="10人" onClick={this.selPeople}>10人</div>
              </div>
            </div>

            <div id="sel_price" className={"sel" + " " + this.state.openPrice} onClick={this.openPrice}>
              <div className="first" data-value="5000">{this.state.nowPrice}</div>
              <div className={"option" +" " + this.state.openPrice}>
                <div className="" data-value="5000" data-text="全部" onClick={this.selPrice}>全部</div>
                <div className="" data-value="300" data-text="300以下" onClick={this.selPrice}>300以下</div>
                <div className="" data-value="450" data-text="450以下" onClick={this.selPrice}>450以下</div>
                <div className="" data-value="600" data-text="600以下" onClick={this.selPrice}>600以下</div>
                <div className="" data-value="750" data-text="750以下" onClick={this.selPrice}>750以下</div>
              </div>
            </div>
            <button id="search-btn" onClick={this.onSearch}>搜尋</button>
        </div>
      </React.Fragment>
    )
  }


}

export default SearchBar;