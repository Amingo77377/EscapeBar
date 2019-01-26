import React,{Component} from 'react';
import './pro_price.scss';

class PRO_PRICE extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    scrollToStock = () => {
        this.props.scrollToStock()
    }
    render(){
        return(
            <React.Fragment>
                <div id="pro_price">
                    <div id="price">
                        <p>每人</p>
                        <p id="price_p">${this.props.price}<span className="up"> 起</span></p>
                    </div>
                    <div className="w60">
                        <div onClick={this.scrollToStock}>我要預約</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_PRICE;