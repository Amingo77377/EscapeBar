import React, { Component } from 'react';
import './Group.scss';
import moment from 'moment';

class GroupList extends Component {
    constructor(props){
        super(props)
    }

    handler = (evt) => {
        console.log("===CollectList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.groupModify(evt.target.dataset.id, evt.target.dataset.type);
    }

    render(){
        
        return(
            <React.Fragment>
                
                <div className="d-flex flex-wrap">

                {
                    this.props.groups2.map(groups2 =>
                        <div className="card colcard text-center mr-3 ml-3 mb-5 mt-3">

                            <div>
                                <div>
                                    <img className="collect_img" src={"../img/game/"+groups2.IMG_NAME}></img>
                                </div>

                                <button type="button" className="btn btn-danger del-btn" data-dismiss="modal" data-id={groups2.aid} data-type="del" onClick={this.handler}>X</button>

                                {/* <button type="button" className="btn btn-danger del-btn" data-toggle="modal" data-target={(`#exampleModal${groups2.aid}`)}>
                                X
                                </button>
                                <div className="modal fade" id={(`exampleModal${groups2.aid}`)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">取消參加</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                你確定要取消 "{groups2.PRO_NAME}" 的參加嗎？
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={groups2.aid} data-type="del" onClick={this.handler}>確定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                
                                <img className="collect_clogo" src={"../images/company/40/"+groups2.c_logo}></img>
                                
                                <h5 className="card-title">{groups2.PRO_NAME}</h5>
                                
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <div>尋找</div>
                                        <div className="group_num_style">{groups2.goal_people}</div>
                                        <div>名隊友</div>
                                    </div>
                                    <div class="col-4 text-center">
                                        <div>目前</div>
                                        <div className="group_num_style2">{groups2.current_people}</div>
                                        <div>名組隊</div>
                                    </div>
                                    <div class="col-4 text-center">
                                        <div> 剩下</div>
                                        <div className="group_num_style3">{groups2.ask_people}</div>
                                        <div>名缺額</div>
                                    </div>
                                </div>
                                <a href="/" className="btn btn-primary mt-3">了解更多</a>
                                <div className="row collect_info">
                                    <div className="col-sm">{groups2.city_name}</div>
                                    <div className="col-sm">{groups2.GAME_TIME}分鐘</div>
                                    <div className="col-sm"><span className="group_price_style">${groups2.PRICE}起</span></div>
                                </div>

                            </div>

                        </div>
                    )
                }

                </div>
                
            </React.Fragment>
        )
    }
}

export default GroupList;