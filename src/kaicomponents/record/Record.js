import React, { Component } from 'react';
import './Record.scss';

import RecordList from './RecordList';
import RecordAdd from './RecordAdd';
import RecordModify from './RecordModify';
import UserFirst from './UserFirst';

var uid = null;

class Record extends Component {
    constructor(props){
        super(props)

        this.initState = {
            mrg_id:"",
            uid:"",
            gid:"",
            score:"",
            record_pic:"",
            play_review:"",
            play_date:"",
            create_at:"",
        }
        console.log("===Record===");
        // console.log(members);
        this.state = {　// 設定 state 初始值
            // members: members // state 屬性：json 資料
            members: [], // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
            member: this.initState,
            type: 'add'
        }
    }

    recordHandler =  (datas) => {
        // // datas 為子元件傳過來的資料
        // console.log("===Member addhandler===");
        console.log(datas);

        const { uid, gid, score, record_pic, play_review, play_date, create_at } = datas;
        let formData = new FormData();
        
        formData.append('uid', uid);
        formData.append('gid', gid);
        formData.append('score', score);
        formData.append('record_pic', record_pic);
        formData.append('play_review', play_review);
        formData.append('play_date', play_date);
        formData.append('create_at', create_at);

        // 呼叫 Restful API 新增資料 POST
        fetch("http://localhost:3000/api/records/",{
            method: 'POST',
            // body: JSON.stringify(datas), // datas 為傳進來的 json 物件，須轉為 json 字串做傳遞
            body: formData,
            // headers: new Headers({
            //     'Content-Type': 'application/json'
            // })
        })
        .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "新增成功"}，並轉成 json 格式
        .then(data => {
            // alert(data.message)
            this.getMembers(); // 呼叫 getMembers()
        })
    }

    updateHandler = (member) => {
        const { score, play_date, play_review, record_pic } = member;
        let formData = new FormData();
        
        formData.append('score', score);
        formData.append('play_date', play_date);
        formData.append('play_review', play_review);
        formData.append('record_pic', record_pic);

        fetch('http://localhost:3000/api/recordedit/' + member.mrg_id, {
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

    modifyHandler = (id, type) => { // id, type 為子元件傳過來的資料
        switch(type){
            case "edit":
            fetch("http://localhost:3000/api/recordedit/" + id, {
                method: 'GET'
            }).then(res => res.json())
                .then(data => {
                    this.setState({
                        member: data[0],
                        type: "edit"
                    })
                });
            break;

            case "del":
                // alert("memberId: " + id);
                // const members = this.state.members.filter(members => parseInt(members.uid) !== parseInt(id));
                // this.setState({
                //     members:members
                // })
                console.log("===Record===");
                console.log(id);
                fetch("http://localhost:3000/api/members/" + id,{
                    method: 'DELETE'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    alert(data.message)
                    this.getMembers(); // 呼叫 getMembers()
                })
            break;
        }
        
    }
    render(){
        const isRecordData = this.state.members.length;
        console.log(isRecordData)

        const isRecordEditData = this.state.type;
        console.log(isRecordEditData)
        
        var thing = 0;
        switch (isRecordEditData) {
            case "add":
                thing = 0;
                break;
            case "edit":
                thing = 1;
                break;
        }

        return(
            <React.Fragment>

                <h4 className='mt-3'>遊戲紀錄</h4>
                <div className="record_title_line mb-2"></div>
                
                {/* <RecordList members = {this.state.members} memberModify = {this.modifyHandler} /> */}{/* 父傳 members.json 資料給 MemberList 子元件 */} {/* 子傳父 */}
                {isRecordData ? (<RecordList members = {this.state.members} memberModify = {this.modifyHandler} />) : (<UserFirst />)}
                
                {/* <RecordModify modifyType={this.state.type} modifyData={this.state.member} memberUpdate={this.updateHandler}/> */}
                {thing ? (<RecordModify modifyType={this.state.type} modifyData={this.state.member} memberUpdate={this.updateHandler}/>) : (null)}

                {/* <RecordAdd memberRecord = {this.recordHandler} /> */}

            </React.Fragment>
        )
    }

    componentDidMount(){
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        uid = user2.uid

        this.getMembers();
    }

    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getMembers(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/records/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(members => this.setState({ // members 接收轉成 json 的結果，this.setState() 更新資料
            members:members
        }))
        
    }
}

export default Record;