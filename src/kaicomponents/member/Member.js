import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Member.scss';

import MemberList from './MemberList';
import MemberModify from './MemberModify';

import Labby from '../labby/Labby';
import Order from '../order/Order';
import Group from '../group/Group';
import Collect from '../collect/Collect';
import Studio from '../studio/Studio';
import Record from '../record/Record';

var uid = null;

class Member extends Component {
    constructor(props){
        super(props)

        this.initState = {
            uid:"",
            email:"",
            password:"",
            nickname:"",
            gender:"",
            birthday:"",
            city_id:"",
            address:"",
            mobile:"",
            user_pic:"",
            create_at: ""
        }
        console.log("===Member===");
        // console.log(members);
        this.state = {　// 設定 state 初始值
            // members: members // state 屬性：json 資料
            members: [], // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
            member: this.initState,
            type: 'add'
        }
        console.log(this.state.members);
        console.log(this.state.member);
        console.log(this.state.type);
    }

    updateHandler = (member) => {
       // console.log(JSON.stringify(member));

        const { password, nickname, gender, birthday, city_id, address, mobile, user_pic } = member;
        let formData = new FormData();
        
        formData.append('password', password);
        formData.append('nickname', nickname);
        formData.append('gender', gender);
        formData.append('birthday', birthday);
        formData.append('city_id', city_id);
        formData.append('address', address);
        formData.append('mobile', mobile);
        formData.append('user_pic', user_pic);
       // console.log(formData.get('user_pic'))

        fetch('http://localhost:3000/api/members/' + member.uid, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                this.state.type = 'add';
                this.getMembers();
            })
    }

    modifyHandler = (id, type) => { // id 為子元件傳過來的資料
        switch(type){
            case "edit":
                fetch("http://localhost:3000/api/members/" + id, {
                    method: 'GET'
                }).then(res => res.json())
                    .then(data => {
                        this.setState({
                            member: data[0],
                            type: "edit"
                        })
                    });
            break;
        }
    }
    
    render(){
        console.log(this.state.members);
        console.log(this.state.member);
        console.log(this.state.type);

        const isMemberData = this.state.type;
        console.log(isMemberData)
        
        var thing = 0;
        switch (isMemberData) {
            case "add":
                thing = 0;
                break;
            case "edit":
                thing = 1;
                break;
        }

        return(
                    <div className="container">
                        <MemberList members = {this.state.members} memberModify = {this.modifyHandler} /> {/* 父傳 members.json 資料給 MemberList 子元件 */} {/* 子傳父 */}
                        
                        {/* <MemberModify modifyType={this.state.type} modifyData={this.state.member} memberUpdate={this.updateHandler} /> */}
                        {/* {isMemberData ? (<MemberModify modifyType={this.state.type} modifyData={this.state.member} memberUpdate={this.updateHandler} />) : (null)} */}
                       {thing ? (<MemberModify modifyType={this.state.type} modifyData={this.state.member} memberUpdate={this.updateHandler} />) : (null)}

                        <div className="mem_sub_nav">
                            <div className="mem-font-size">
                                <Link to={`${this.props.match.url}/labby`}><span className="sub_nav_items ">個人主頁</span></Link>
                                <Link to={`${this.props.match.url}/order`}><span className="sub_nav_items ">我的訂單</span></Link>
                                <Link to={`${this.props.match.url}/group`}><span className="sub_nav_items ">我的揪團</span></Link>
                                <Link to={`${this.props.match.url}/collect`}><span className="sub_nav_items ">收藏清單</span></Link>
                                <Link to={`${this.props.match.url}/studio`}><span className="sub_nav_items ">追蹤工作室</span></Link>
                                <Link to={`${this.props.match.url}/record`}><span className="sub_nav_items ">遊戲紀錄</span></Link>
                            </div>
                        </div> 

                        <Route exact path={`${this.props.match.url}/`} component={Labby} />
                        {/* http://localhsot:3000/center/order */}
                        <Route path={`${this.props.match.url}/labby`} component={Labby} />
                        {/* http://localhsot:3000/center/order */}
                        <Route path={`${this.props.match.url}/order`} component={Order} />
                        {/* http://localhsot:3000/center/group */}
                        <Route path={`${this.props.match.url}/group`} component={Group} />
                        {/* http://localhsot:3000/center/collect */}
                        <Route path={`${this.props.match.url}/collect`} component={Collect} />
                        {/* http://localhsot:3000/center/studio */}
                        <Route path={`${this.props.match.url}/studio`} component={Studio} />
                        {/* http://localhsot:3000/center/record */}
                        <Route path={`${this.props.match.url}/record`} component={Record} />
                    </div>
         
        )
    }

    // 網頁產生後會觸發此事件 
    
    componentDidMount(){
        const user = localStorage.getItem('userId');

        if(user == null) {
            alert("請先登入會員！")
            this.props.history.push('/')
        } else {
            const user2 = JSON.parse(user);
            uid = user2.uid

            this.getMembers();
        }
    }

    // componentDidMount(){
    //     const user = localStorage.getItem('userId');
    //     const user2 = JSON.parse(user);
    //     uid = user2.uid

    //     this.getMembers();
    // }
    
    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getMembers(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/members/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(members => this.setState({ // members 接收轉成 json 的結果，this.setState() 更新資料
            members:members
        }))
    }
}

export default Member;