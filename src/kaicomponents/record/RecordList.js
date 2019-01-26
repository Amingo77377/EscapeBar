import React, { Component } from 'react';
import './Record.scss';
import moment from 'moment';

class RecordList extends Component {
    constructor(props){
        super(props)
        console.log("===MemberList===");
        console.log(this.props.members);
    }
    handler = (evt) => {
        console.log("===RecordList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.memberModify(evt.target.dataset.id, evt.target.dataset.type);
    }
    render(){
        return(
            <React.Fragment>
                
                    {
                        this.props.members.map(member =>

                            <div class="row mb-3">
                                <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <img className="record_img" src={"../img/game/"+member.IMG_NAME}></img>
                                </div>
                                <div class="col-8 col-sm-4 col-md-4 col-lg-4 col-xl-4 lao-font-size">
                                    {/* <div><span className="title_name">遊戲名稱：</span>{member.mrg_id}</div> */}
                                    <div><span className="title_name name_style">遊戲名稱：</span>{member.PRO_NAME}</div>
                                    <div><span className="title_name name_style">闖關分數：</span>{member.score}</div>
                                    <div><span className="title_name name_style">遊玩日期：</span>{moment(member.play_date).format("YYYY/MM/DD")}</div>
                                    <div><span className="title_name name_style">遊玩心得：</span>{member.play_review}</div>
                                </div>
                                <div class="col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div><span className="title_name name_style">闖關照片：</span></div>
                                    <img className="record_img2" src={"http://localhost:3000/images/records/"+member.record_pic}></img>
                                </div>
                                <div class="col-8 align-self-center col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <button className="btn btn-primary btn_style" data-id={member.mrg_id} data-type="edit" onClick={this.handler}>編輯遊戲紀錄</button>
                                </div>
                            </div>
                        )
                    }

            </React.Fragment>
        )
    }
}

export default RecordList;