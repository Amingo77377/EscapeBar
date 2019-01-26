import React, { Component } from 'react';
import './Group.scss';

import GroupList from './GroupList';
import GroupList2 from './GroupList2';
import UserFirst from './UserFirst';

var uid = null;

class Group extends Component {
    constructor(props){
        super(props)
        console.log("===Record===");
        // console.log(members);
        this.state = {　// 設定 state 初始值
            groups: [], // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
            groups2: []
        }
    }

    modifyHandler = (id, type) => { // id 為子元件傳過來的資料
        switch(type){
            case "edit":
                // alert(type + ": " + id); // TODO
            break;

            case "del":
                // alert("memberId: " + id);
                // const members = this.state.members.filter(members => parseInt(members.uid) !== parseInt(id));
                // this.setState({
                //     members:members
                // })
                console.log("===Group===");
                console.log(id);

                // if(window.confirm("你確定要取消揪團嗎？"))

                fetch("http://localhost:3000/api/groups/" + id,{
                    method: 'DELETE'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    // alert(data.message)
                    this.getGroups();
                })
            break;
        }
        
    }

    modifyHandler2 = (id, type) => { // id 為子元件傳過來的資料
        switch(type){
            case "edit":
                // alert(type + ": " + id); // TODO
            break;

            case "del":
                // alert("memberId: " + id);
                // const members = this.state.members.filter(members => parseInt(members.uid) !== parseInt(id));
                // this.setState({
                //     members:members
                // })
                console.log("===Group===");
                console.log(id);

                if(window.confirm("你確定要取消參加嗎？"))

                fetch("http://localhost:3000/api/groups2/" + id,{
                    method: 'DELETE'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    // alert(data.message)
                    this.getGroups2();
                })
            break;
        }
        
    }



    render(){
        const isGroupData = this.state.groups.length;
        console.log(isGroupData)
        const isGroupData2 = this.state.groups2.length;
        console.log(isGroupData2)

        return(
            <React.Fragment>
                <h4 className='mt-3'>我的揪團</h4>
                <div className="group_title_line mb-2"></div>
                {isGroupData ? (<GroupList groups = {this.state.groups} groupModify = {this.modifyHandler} />) : (<UserFirst />)}
                
                <h4 className='mt-3'>我參與的揪團</h4>
                <div className="group_title_line mb-2"></div>
                {isGroupData2 ? (<GroupList2 groups2 = {this.state.groups2} groupModify = {this.modifyHandler2}/>) : (<UserFirst />)}

            </React.Fragment>
        )
    }

    componentDidMount(){
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        uid = user2.uid

        this.getGroups();
        this.getGroups2();
    }

    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getGroups(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/groups/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(groups => this.setState({ // groups 接收轉成 json 的結果，this.setState() 更新資料
            groups:groups
        }))
    }

    getGroups2(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/groups2/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(groups2 => this.setState({ // groups 接收轉成 json 的結果，this.setState() 更新資料
            groups2:groups2
        }))
    }

}

export default Group;