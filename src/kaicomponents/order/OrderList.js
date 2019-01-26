import React, { Component } from 'react';
import './Order.scss';
import moment from 'moment';
import OrderForm from './OrderForm';

class OrderList extends Component {
    constructor(props){
        super(props)
        console.log("===MemberList===");
        console.log(this.props.members);
    }
    handler = (evt) => {
        console.log("===MemberList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.memberModify(evt.target.dataset.id, evt.target.dataset.type);
    }
    render(){
        return(
            <React.Fragment>
                
                {
                    this.props.members.map(member =>

                        <div className="row mb-3">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <img className="order_img" src={"../img/game/"+member.IMG_NAME}></img>
                            </div>
                            <div className="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3 lao-font-size">
                                <div><span className="order_title_items name_style">遊戲名稱：</span>{member.PRO_NAME}</div>
                                <div><span className="order_title_items name_style">日期時間：</span>{moment(member.DATE).format("YYYY/MM/DD")}</div>
                                <div><span className="order_title_items name_style">遊玩人數：</span>{member.PEOPLE_NUM}人</div>
                                <div><span className="order_title_items name_style">付款方式：</span>{member.PAY_TYPE}</div>
                                <div><span className="order_title_items name_style">付款金額：</span>{member.T_PRICE}元</div>
 
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 lao-font-size">
                                <div><span className="order_title_items name_style">工作室名稱：</span>{member.s_name}</div>
                                <div><span className="order_title_items name_style">遊戲地址：</span>{member.s_add}</div>
                                <div><span className="order_title_items name_style">訂單狀態：</span><span className="order_status_item">{member.STATUS_NAME}</span></div>
                            </div>
                            {/* <div class="col-4"></div> */}
                            <div className="col-8 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">

                                {/* 通知好友 */}
                                <button type="button" className="btn btn-info mb-2 mr-2 btn_style" data-toggle="modal" data-target={(`#exampleModal${member.SID}`)}>
                                通知好友
                                </button>

                                <div className="modal fade" id={(`exampleModal${member.SID}`)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">通知好友</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            遊戲名稱：{member.PRO_NAME}
                                                        </div>
                                                        <div className="col-5">
                                                            日期時間：{moment(member.DATE).format("YYYY/MM/DD")}
                                                        </div>
                                                    </div>
                                                </div>

                                                <OrderForm mailInfo = {member}/>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 取消訂單 */}
                                {/* <br /> */}
                                <button type="button" className="btn btn-primary mb-2 mr-2 btn_style" data-dismiss="modal" data-id={member.STOCK_SID} data-type="del" onClick={this.handler}>
                                取消訂單
                                </button>
                                
                                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target={(`#exampleModal${member.SID}`)}>
                                取消訂單
                                </button>
                                <br />
                                <div className="modal fade" id={(`exampleModal${member.SID}`)} tabindex="-1" role="dialog" aria-labelledby="exampleMod}alLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">取消訂單</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                你確定要取消 "{member.PRO_NAME}" 的訂單嗎？
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={member.STOCK_SID} data-type="del" onClick={this.handler}>確定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default OrderList;