import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './LaOrder.scss';

moment.locale('zh-tw');

class LaOrder extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return(

            <React.Fragment>
                {/* {
                    if(this.props.length == 0){
                        <span>你還沒有訂單，趕快去預約遊戲吧！</span>
                    }else{
                        this.props.order.map(order =>

                            <div class="row">
                                <div class="col-2">
                                    <img src={"../images/games/"+order.IMG_NAME}></img>
                                </div>
                                <div class="col-8">
                                    <div>您於{moment(order.CRATE_DATE).format("YYYY/MM/DD")}預定了一款遊戲</div>
                                    <div>{order.PRO_NAME}</div>
                                    <div>距離遊戲開始，還有{moment(order.DATE, "YYYYMMDD").fromNow()}</div>
                                </div>
                                <div class="col-2 align-self-center">
                                    <Link to="/center/order"><button className="btn btn-info">查看我的訂單</button></Link>
                                </div>
                            </div>

                        )
                    }
                } */}

                {
                    this.props.order.map(order =>

                        <div class="row">
                            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <img className="lao_img" src={"../img/game/"+order.IMG_NAME}></img>
                            </div>
                            <div class="col-5 col-sm-7 col-md-7 col-lg-7 col-xl-7 lao-font-size">
                                <div>您於<span className="date_style"> {moment(order.CRATE_DATE).format("YYYY/MM/DD")} </span>預定了一款遊戲</div>
                                <div><span className="name_style">{order.PRO_NAME}</span></div>
                                <div>距離遊戲開始：<span className="date_style"> {moment(order.DATE, "YYYYMMDD").fromNow()}</span></div>
                            </div>
                            <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">
                                <Link to="/center/order"><button className="btn btn-warning btn_style">查看我的訂單</button></Link>
                            </div>
                        </div>

                    )
                }

            </React.Fragment>

        )
    }

}

export default LaOrder;