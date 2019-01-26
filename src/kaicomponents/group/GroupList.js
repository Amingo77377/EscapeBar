import React, { Component } from 'react';
import './Group.scss';
import moment from 'moment';
import GroupJoin from './GroupJoin';

class GroupList extends Component {
    constructor(props){
        super(props)
        console.log("===groups===");
        console.log(this.props.groups);
        console.log("===groupsjoin===");
        console.log(this.props.groupsjoin);
    }

    handler = (evt) => {
        console.log("===GroupList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.groupModify(evt.target.dataset.id, evt.target.dataset.type);
    }

    render(){
        
        return(
            <React.Fragment>
            
                {
                    this.props.groups.map(group =>

                        <div className="row mb-3">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <img className="group_img" src={"../img/game/"+group.IMG_NAME}></img>
                            </div>
                            <div className="col-9 col-sm-3 col-md-3 col-lg-3 col-xl-3 lao-font-size">
                                <div><span className="group_title_items name_style">遊戲名稱：</span>{group.PRO_NAME}</div>
                                <div><span className="group_title_items name_style">工作室名稱：</span>{group.c_name}</div>
                                <div><span className="group_title_items name_style">揪團時間：</span>{moment(group.sel_time).format("YYYY/MM/DD")}</div>
                                <div><span className="group_title_items name_style">揪團狀態：</span></div>
                                <div className="row">
                                    <div className="col-4 text-center lao-font-size">
                                        <div>尋找</div>
                                        <div className="group_num_style">{group.goal_people}</div>
                                        <div>名隊友</div>
                                    </div>
                                    <div className="col-4 text-center lao-font-size">
                                        <div>目前</div>
                                        <div className="group_num_style2">{group.current_people}</div>
                                        <div>名組隊</div>
                                    </div>
                                    <div className="col-4 text-center lao-font-size">
                                        <div> 剩下</div>
                                        <div className="group_num_style3">{group.ask_people}</div>
                                        <div>名缺額</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <div><span className="group_title_items name_style">距揪團截止：</span><span className="group_date_style name_style">{moment(group.t_deadline, "YYYYMMDD").fromNow()}</span></div>
                                <span className="group_title_items name_style">已參與成員：</span>
                                <div className="scrollme">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr className="">
                                                <th scope="col"><span className="group_title_items name_style">會員 E-mail</span></th>
                                                <th scope="col"><span className="group_title_items name_style">參加人數</span></th>
                                                <th scope="col"><span className="group_title_items name_style">加入日期</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <GroupJoin tid={group.tid} /> {/* 已參與成員 */}
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>

                            <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center text-center">
                                {/* 刪除揪團 */}
                                <button type="button" className="btn btn-primary btn_style" data-toggle="modal" data-target={(`#exampleModal${group.tid}`)}>
                                刪除揪團
                                </button>

                                <div className="modal fade" id={(`exampleModal${group.tid}`)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">刪除揪團</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                你確定要刪除 "{group.PRO_NAME}" 的揪團嗎？
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={group.tid} data-type="del" onClick={this.handler}>確定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
                
            </React.Fragment>
        )
    }
}

export default GroupList;