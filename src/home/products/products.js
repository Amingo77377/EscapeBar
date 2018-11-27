import React, {Component} from 'react';
import './products.scss';
import PRO_SLIDER from './pro_slider.js';
import PRO_NAME from './pro_name.js';
import PRO_INFO from './pro_info.js';
import PRO_PRICE from './pro_price.js';
import PRO_MAP from './pro_map.js';
import PRO_SHARE from './pro_share.js';
import PRO_MANU from './pro_manu.js';
import PRO_COMMENT from './pro_comment.js';
import PRO_BUY_RULE from './pro_buy_rule.js';
import PRO_STOCK from './pro_stock.js';
import PRO_AD from './pro_ad.js';

class Products extends Component{
    constructor(props){
        super(props)
        // this.ID = props.match.params.ID;
    }

    componentDidMount(){
        // console.log("app componentDidMount")
    }
    
    render(){
        return(
            <React.Fragment>
                <div id="products">
                    <PRO_SLIDER />
                    <div id="pro_body">
                        <div className="pro_body_l">
                            <PRO_NAME />
                            <PRO_INFO />
                            {/* <PRO_COMMENT/> */}
                            <PRO_BUY_RULE/>
                        </div>
                        <div className="pro_body_r">
                            <PRO_PRICE />
                            <PRO_MAP />
                            <PRO_SHARE />
                            <PRO_MANU />
                            <PRO_STOCK />
                        </div>
                        <div className="pro_body_l">
                            {/* <PRO_COMMENT/> */}
                            {/* <PRO_BUY_RULE/> */}
                        </div>
                        <div className="pro_body_r">
                            {/* <PRO_STOCK /> */}
                        </div>
                        {/* <PRO_AD /> */}
                    </div>
                  
                </div>
            </React.Fragment>
        )
    }
}

export default Products;