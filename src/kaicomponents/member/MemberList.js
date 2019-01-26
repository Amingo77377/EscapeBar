import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Member.scss';

class MemberList extends Component {
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
            <BrowserRouter>
            <React.Fragment>

                {
                    this.props.members.map(member =>
                        <div className="row mb-3 mem-list-top">
                            <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
                                {/* <img className="headshot rounded-circle" src={"../images/users/"+member.user_pic}></img> */}
                                <img className="headshot rounded-circle" src={"http://localhost:3000/images/users/"+member.user_pic}></img>
                            </div>

                            <div className="col-8 col-sm-8 col-md-10 col-lg-10 col-xl-10">
                                <div>Hi, <span className="nickname_style">{member.nickname}</span></div>
                                <div className="mb-2">{member.email}</div>
                                <div><button className="btn btn-info" data-id={member.uid} data-type="edit" onClick={this.handler}>編輯個人資料</button></div>
                                
                                {/* <Link to={`${this.props.match.url}/modify`}><span className="sub_nav_items">編輯個人資料</span></Link> */}
                            </div>
                        </div>
                    )
                }

            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default MemberList;