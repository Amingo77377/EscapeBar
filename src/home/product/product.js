import React,{Component} from 'react';
import './product.scss';
import PRO_SLIDER from './pro_slider.js';
import PRO_NAME from './pro_name.js';
import PRO_INFO from './pro_info.js';
import PRO_MAP from './pro_map.js';
import PRO_MANU from './pro_manu.js';
import PRO_COMMENT from './pro_comment.js';
import PRO_BUY_RULE from './pro_buy_rule.js';
import PRO_STOCK from './pro_stock.js';
import PRO_AD from './pro_ad.js';

class Product extends Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        // console.log("app componentDidMount")
    }
    
    render(){
        return(
            <React.Fragment>
                <div id="product">
                    <PRO_SLIDER />
                    <div id="pro_body"className="w80">
                        <PRO_NAME />
                        <PRO_INFO />
                        {/* <buy_btn /> */}
                        {/* <PRO_MAP />
                        <PRO_MANU />
                        <PRO_COMMENT/>
                        <PRO_BUY_RULE/>
                        <PRO_STOCK />
                        <PRO_AD /> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product;