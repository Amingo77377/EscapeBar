import React, { Component } from 'react';
import './Order.scss';
import moment from 'moment';

class OrderListCancel extends Component {
    constructor(props){
        super(props)
        console.log("===MemberList===");
        console.log(this.props.members);
    }

    render(){
        return(
            <React.Fragment>
                

                {
                    this.props.members2.map(member =>

                        <div class="row mb-3">
                            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <img className="order_img" src={"../img/game/"+member.IMG_NAME}></img>
                            </div>
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3 lao-font-size">
                                <div><span className="order_title_items name_style">遊戲名稱：</span>{member.PRO_NAME}</div>
                                <div><span className="order_title_items name_style">日期時間：</span>{moment(member.DATE).format("YYYY/MM/DD")}</div>
                                <div><span className="order_title_items name_style">遊玩人數：</span>{member.PEOPLE_NUM}人</div>
                                <div><span className="order_title_items name_style">付款方式：</span>{member.PAY_TYPE}</div>
                                <div><span className="order_title_items name_style">付款金額：</span>{member.T_PRICE}元</div>
 
                            </div>
                            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 lao-font-size">
                                <div><span className="order_title_items name_style">工作室名稱：</span>{member.s_name}</div>
                                <div><span className="order_title_items name_style">遊戲地址：</span>{member.s_add}</div>
                                <div><span className="order_title_items name_style">訂單狀態：</span><span className="order_status2_item">{member.STATUS_NAME}</span></div>
                            </div>
                            <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">
                            
                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default OrderListCancel;