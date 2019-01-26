import React, { Component } from 'react';
import './Studio.scss';

import StudioList from './StudioList';
import UserFirst from './UserFirst';

var uid = null;

class Studio extends Component {
    constructor(props){
        super(props)
        this.state = {　// 設定 state 初始值
            // members: members // state 屬性：json 資料
            studios: [] // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
        }
    }

    modifyHandler = (id, type) => { // id 為子元件傳過來的資料
        switch(type){
            case "edit":
                // alert(type + ": " + id); // TODO
            break;

            case "del":

                // if(window.confirm("你確定要取消追蹤嗎？"))

                fetch("http://localhost:3000/api/studios/" + id,{
                    method: 'DELETE'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    // alert(data.message)
                    this.getStudios();
                })
            break;
        }
    }

    render(){
        const isStudioData = this.state.studios.length;
        console.log(isStudioData)

        return(
            <React.Fragment>

                <h4 className='mt-3'>追蹤工作室</h4>
                <div className="studio_title_line mb-2"></div>
                {/* <StudioList studios = {this.state.studios} studioModify = {this.modifyHandler}/> */}
                {isStudioData ? (<StudioList studios = {this.state.studios} studioModify = {this.modifyHandler}/>) : (<UserFirst />)}

            </React.Fragment>
        )
    }

    componentDidMount(){
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        uid = user2.uid

        this.getStudios();
    }

    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getStudios(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/studios/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(studios => this.setState({ // collects 接收轉成 json 的結果，this.setState() 更新資料
            studios:studios
        }))
    }
}

export default Studio;