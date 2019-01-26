import React,{Component} from 'react';
import './pro_price2.scss';

class ProPrice2 extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    scrollToStock2 = () => {
        this.props.scrollToStock2()
    }
    render(){
        return(
            <React.Fragment>
                <div id="pro_price2">
                    <div id="price2">
                        <p>每人 </p>
                        <p id="price_p2">${this.props.price}<span className="up"> 起</span></p>
                    </div>
                    <div className="w60">
                        <div onClick={this.scrollToStock2}>我要預約</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default ProPrice2;