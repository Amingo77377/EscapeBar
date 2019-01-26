import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.scss'

class QueryBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            textResults: [],
            keywordOpen: "",
        } ;
    }

    // 輸入文字同時取得符合的結果並回傳地圖中心與比例尺與場館資訊
    handleSubmit =(e)=> {
        // console.log(this.state.name_kw);
        e.preventDefault();

        fetch('http://localhost:3000/map/name/'+this.state.name_kw)
        .then(res => res.json())
        // .then(({data})=>{console.log(data)})
        .then(({data})=>{
            this.props.getStoreByName({
                zoom: 16,
                center: {lat: data[0].lat, lng: data[0].lng},
                storeId: data[0].sid,
                storeLogo: data[0].s_logo,
                storeName: data[0].s_name,
                storeAdd: data[0].s_add,
                storeTel: data[0].s_tel,
                storeOpHr: data[0].s_ophr,
            })
        })
        .catch(err=> console.log(err))
    }
    
    // 取得符合搜尋字詞的場館，寫到上面去了目前沒用到
    getStoreByName = (name_kw) => {
        fetch('http://localhost:3000/map/name/'+name_kw)
        .then(res => res.json())
        .then(({data})=>{console.log(data)})
        // .then(res => this.setState({
        //     stores: res.data
        // }))
        .catch(err=> console.log(err))
    }

    // 輸入搜尋文字同時出現備選結果
    handleChange =(e) => {
        let text = e.target.value;
        console.log(text);
        if(text === ""){
          this.setState({
            text: "",
            keywordOpen: "close"
          })
          return;
        }
        this.setState({
          name_kw: text,
          text: text,
          keywordOpen: ""
        })
        fetch('http://localhost:3000/map/name/' + text)
        .then(res=>res.json())
        .then(({data}) => this.setState({
          textResults: data
        }))
        console.log(this.state.textResults)
    }
    
    // 
    keywordDown = (e) => {
        let text = e.target.dataset.text;
        console.log("Text:"+ text)
        this.setState({
          name_kw: text,
          text: text,
          keywordOpen : "close"
        })
    }
    close = () => {
        this.setState({
            // keywordOpen : "close"
        })
        setTimeout(()=>{
          this.setState({
            keywordOpen : "close"
          })
        }, 100)
    }
    
    render(){
        return(
            <React.Fragment>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" placeholder="或者輸入場館或工作室名稱..." onChange={this.handleChange} value={this.state.text} onBlur={this.close}/>
                        <div className="keywordToBeSelected">
                            {this.state.textResults.map((text, i) =>
                                <div key={i} className={"text_results" + " " + this.state.keywordOpen} onClick={this.keywordDown} data-text={text.s_name}>{text.s_name}</div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-warning queryBtn">搜尋</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default QueryBar;