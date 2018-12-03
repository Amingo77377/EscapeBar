import React, {Component} from 'react';
import './pro_categories.scss';

class ProCategories extends Component{
  constructor(props){
    super(props)
    this.state = {
      city:">=1",
      price: "",
      people: "",
      text: "",
      cate: "",
      sort: ""
    }
  }
　selCat = (evt) => {
    let cate = evt.target.dataset.value;
    console.log("cate:"+cate)
    this.setState({
      cate
    }, () => {
      this.props.search(this.state)
    })
    
  }
  componentDidUpdate(){
    // this.ReactDOM.findDOMNode(this).scrollTop = 0
    window.scrollTo(0,0)
  }
  render(){
    return(
      <React.Fragment>
        <div id="pro_categories">
            <h3>熱門類別</h3>
            <div id="cates">
              <div className="cat"><div data-value="&& (f.`feature1` =1 || f.`feature2` =1 || f.`feature3` =1) " onClick={this.selCat}>新手入門</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =4 || f.`feature2` =4 || f.`feature3` =4) " onClick={this.selCat}>偵探推理</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =5 || f.`feature2` =5 || f.`feature3` =5) " onClick={this.selCat}>機關重重</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =6 || f.`feature2` =6 || f.`feature3` =6) " onClick={this.selCat}>劇情厲害</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =7 || f.`feature2` =7 || f.`feature3` =7) " onClick={this.selCat}>場景逼真</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =8 || f.`feature2` =8 || f.`feature3` =8) " onClick={this.selCat}>輕鬆歡樂</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =9 || f.`feature2` =9 || f.`feature3` =9) " onClick={this.selCat}>恐怖驚悚</div></div>
              <div className="cat"><div data-value="&& (f.`feature1` =13 || f.`feature2` =13 || f.`feature3` =13) " onClick={this.selCat}>親子同遊</div></div>
            </div>
        </div>
      </React.Fragment>
    )
  }


}

export default ProCategories;