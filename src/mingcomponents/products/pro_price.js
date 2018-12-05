import React,{Component} from 'react';
import './pro_price.scss';

class PRO_PRICE extends Component{
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
                <div id="pro_price">
                    <div id="price">
                        <p>每人</p>
                        <p id="price_p">${this.props.price} 起</p>
                    </div>
                    <div className="w60">
                        <div >我要預約</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_PRICE;