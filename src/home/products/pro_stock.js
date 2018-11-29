import React,{Component} from 'react';
import './pro_stock.scss';
import DATE_PICKER from './date_picker.js'
import DatePicker2 from './date_picker2.js';

class PRO_STOCK extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: 0,
            stock: []
        }
    }
    getStock = () => {
        let pid = this.props.pid
      if(this.state.stock.length === 0){
        fetch('http://localhost:3000/eb/pro_list/products/stock/' + pid ,{
          method:'GET',
          mode:'cors',
        })
        .then(res => res.json())
        .then(stock => this.setState({
          stock: stock,
        }))
      }
    //   console.log("stock:"+ this.state.stock.map(a=> a.DATE ?))
    }
    render(){
        this.getStock()
        
        return(
            <React.Fragment>
                <div id="pro_stock">
                    <div id="pro_stock_place">
                        <h4>選擇預約場館</h4>
                        <select>
                            <option>台北館</option>
                            <option>台中館</option>
                        </select>
                    </div>
                    <div id="pro_stock_date">
                        <h4>預約日期與時段</h4>
                        <DatePicker2 stock={this.state.stock}/>
                        <ul>
                            <li>
                                <div className="unchecked"></div>
                                <div>10:00-12:00</div>
                                <div className="number">
                                    <div className="minus-btn">
                                        <div className="mb1"></div>
                                    </div>
                                    {this.state.number}
                                    <div className="plus-btn">
                                        <div className=""></div>
                                        <div className="pb1"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="unchecked"></div>
                                <div>10:00-12:00</div>
                                <div className="number">
                                    <div className="minus-btn">
                                        <div className="mb1"></div>
                                    </div>
                                    {this.state.number}
                                    <div className="plus-btn">
                                        <div className=""></div>
                                        <div className="pb1"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="unchecked"></div>
                                <div>10:00-12:00</div>
                                <div className="number">
                                    <div className="minus-btn">
                                        <div className="mb1"></div>
                                    </div>
                                    {this.state.number}
                                    <div className="plus-btn">
                                        <div className=""></div>
                                        <div className="pb1"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div id="pro_stock_price" className="dd-flex">
                    <div id="title">
                        <p>您選擇的遊戲為</p>
                        <div className="dd-flex">
                        <h4 id="">productName</h4>-<h4 id="">場館</h4>
                        </div>       
                    </div>
                    <div id="total_price">
                        <p>總價</p>
                        <h4>$1,200</h4>
                    </div>    
                </div>
                <div id="pro_stock_buy" className="dd-flex">
                    <div id="join-btn">我要揪團</div>
                    <div id="buy-btn">立即預約</div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_STOCK;