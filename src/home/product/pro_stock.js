import React,{Component} from 'react';
import './pro_stock.scss';
import DATE_PICKER from './date_picker.js'

class PRO_STOCK extends Component{
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
                        <DATE_PICKER />
                    </div>
                    <div id="pro_stock_price"></div>
                    <div id="pro_stock_buy_btn"></div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_STOCK;