import React, { Component } from 'react';
import './Collect.scss';

import CollectList from './CollectList';
import UserFirst from './UserFirst';

var uid = null;

class Collect extends Component {
    constructor(props){
        super(props)
        this.state = {　// 設定 state 初始值
            // members: members // state 屬性：json 資料
            collects: [] // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
        }
    }

    modifyHandler = (id, type) => { // id 為子元件傳過來的資料
        switch(type){
            case "edit":
                // alert(type + ": " + id); // TODO
            break;

            case "del":

                // if(window.confirm("你確定要取消收藏嗎？"))

                fetch("http://localhost:3000/api/collects/" + id,{
                    method: 'DELETE'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    // alert(data.message)
                    this.getCollects();
                })
                
            break;
        }
    }

    render(){
        const isCollectData = this.state.collects.length;
        console.log(isCollectData)

        return(
            <React.Fragment>
                <h4 className='mt-3'>收藏清單</h4>
                <div className="collect_title_line mb-2"></div>
                {/* <CollectList collects = {this.state.collects} collectModify = {this.modifyHandler}/> */}
                {isCollectData ? (<CollectList collects = {this.state.collects} collectModify = {this.modifyHandler}/>) : (<UserFirst />)}

                {/* <ProCards /> */}
            </React.Fragment>
        )
    }

    componentDidMount(){
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        uid = user2.uid

        this.getCollects();
    }

    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getCollects(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/collects/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(collects => this.setState({ // collects 接收轉成 json 的結果，this.setState() 更新資料
            collects:collects
        }))
    }
}

export default Collect;