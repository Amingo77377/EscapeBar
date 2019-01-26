import React, { Component } from 'react';
import './Order.scss';

import OrderList from './OrderList';
import OrderListCancel from './OrderListCancel';
import UserFirst from './UserFirst';

var uid = null;

class Order extends Component {
    constructor(props){
        super(props)
        console.log("===Record===");
        // console.log(members);
        this.state = {　// 設定 state 初始值
            // members: members // state 屬性：json 資料
            members: [], // 透過 ajax 呼叫 Restful API 來取得 json 格式的資料
            members2: []
        }
    }

    recordHandler =  (datas) => {
        // // datas 為子元件傳過來的資料
        // console.log("===Member addhandler===");
        console.log(datas);

        // this.state.members.push(datas);
        // let members = this.state.members;
        // console.log(members);

        // this.setState({
        //     members:members
        // })

        // 呼叫 Restful API 新增資料 POST
        fetch("http://localhost:3000/api/orders/",{
            method: 'POST',
            body: JSON.stringify(datas), // datas 為傳進來的 json 物件，須轉為 json 字串做傳遞
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "新增成功"}，並轉成 json 格式
        .then(data => {
            // alert(data.message)
            this.getMembers(); // 呼叫 getMembers()
        })
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
                console.log("===Record===");
                console.log(id);

                if(window.confirm("你確定要取消訂單嗎？"))

                fetch("http://localhost:3000/api/orders/" + id,{
                    method: 'PUT'
                })
                .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "刪除成功"}，並轉成 json 格式
                .then(data => {
                    // alert(data.message)
                    this.getMembers();
                    this.getMembers2(); // 呼叫 getMembers2()
                })
            break;
        }
        
    }
    render(){
        const isOrderIngData = this.state.members.length;
        console.log(isOrderIngData)
        const isOrderCanData = this.state.members2.length;
        console.log(isOrderCanData)

        return(
            <React.Fragment>
                <h4 className='mt-3'>我的訂單</h4>
                <div className="order_title_line mb-2"></div>
                {/* 父傳 members.json 資料給 MemberList 子元件 */} {/* 子傳父 */}
                {/* <OrderList members = {this.state.members} memberModify = {this.modifyHandler} /> */}
                {isOrderIngData ? (<OrderList members = {this.state.members} memberModify = {this.modifyHandler} />) : (<UserFirst />)}

                <h4 className='order_title mt-3'>歷史紀錄</h4>
                <div className="order_title_line mb-2"></div>
                {/* <OrderListCancel members2 = {this.state.members2} memberModify2 = {this.modifyHandler2} /> */}
                {isOrderCanData ? (<OrderListCancel members2 = {this.state.members2} memberModify2 = {this.modifyHandler2} />) : (<UserFirst />)}

                {/* <OrderForm /> */}
                
                {/* <RecordAdd memberRecord = {this.recordHandler} /> */}
                {/* <MemberModify memberAdd = {this.addHandler} /> 子傳父 */}
            </React.Fragment>
        )
    }

    componentDidMount(){
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        uid = user2.uid

        this.getMembers();
        this.getMembers2();
    }

    // ajax 呼叫 Restful API 取得 MySQL 的資料
    getMembers(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/orders/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(members => this.setState({ // members 接收轉成 json 的結果，this.setState() 更新資料
            members:members
        }))
        
    }

    getMembers2(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/orders_2/" + uid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(members2 => this.setState({ // members 接收轉成 json 的結果，this.setState() 更新資料
            members2:members2
        }))
        
    }
}

export default Order;