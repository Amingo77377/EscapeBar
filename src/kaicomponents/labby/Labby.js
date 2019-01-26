import React, { Component } from 'react';
import './Labby.scss';

import LaOrder from './LaOrder';
import LaGroup from './LaGroup';
import LaCollect from './LaCollect';
import LaStudio from './LaStudio';
import LaRecord from './LaRecord';
import UserFirst from './UserFirst';

var uid = null;

class Labby extends Component {
    constructor(props){
        super(props)

        this.state = {
            order: [],
            group: [],
            collect: [],
            studio: [],
            record: []
        }
    }

    render(){
        const isOrderData = this.state.order.length;
        console.log(isOrderData)
        const isGroupData = this.state.group.length;
        console.log(isGroupData)
        const isCollectData = this.state.collect.length;
        console.log(isCollectData)
        const isStudioData = this.state.studio.length;
        console.log(isStudioData)
        const isRecordData = this.state.record.length;
        console.log(isRecordData)

        return(

                <React.Fragment>

                    <h4 className='labby_title mt-3'>我的訂單</h4>
                    <div className="title_line mb-2"></div>
                    {/* <LaOrder order = {this.state.order}/> */}
                    {isOrderData ? (<LaOrder order = {this.state.order} />) : (<UserFirst />)}

                    <h4 className='labby_title mt-3'>我的揪團</h4>
                    <div className="title_line mb-2"></div>
                    {/* <LaGroup group = {this.state.group}/> */}
                    {isGroupData ? (<LaGroup group = {this.state.group} />) : (<UserFirst />)}

                    <h4 className='labby_title mt-3'>收藏清單</h4>
                    <div className="title_line mb-2"></div>
                    {/* <LaCollect collect = {this.state.collect}/> */}
                    {isCollectData ? (<LaCollect collect = {this.state.collect} />) : (<UserFirst />)}

                    <h4 className='labby_title mt-3'>追蹤工作室</h4>
                    <div className="title_line mb-2"></div>
                    {/* <LaStudio studio = {this.state.studio}/> */}
                    {isStudioData ? (<LaStudio studio = {this.state.studio} />) : (<UserFirst />)}

                    <h4 className='labby_title mt-3'>遊戲紀錄</h4>
                    <div className="title_line mb-2"></div>
                    {/* <LaRecord record = {this.state.record}/> */}
                    {isRecordData ? (<LaRecord record = {this.state.record} />) : (<UserFirst />)}

                </React.Fragment>

        )
    }

    componentDidMount(){
        // 取得登入的會員編號
        const user = localStorage.getItem('userId');
        
        if(user == null) {

        }else {

            const user2 = JSON.parse(user);
            uid = user2.uid

            this.getMyOrder();
            this.getMyGroup();
            this.getMyCollect();
            this.getMyStudio();
            this.getMyRecord();
        }
        
    }

    // componentDidMount(){
    //     // 取得登入的會員編號
    //     const user = localStorage.getItem('userId');
    //     const user2 = JSON.parse(user);
    //     uid = user2.uid

    //     this.getMyOrder();
    //     this.getMyGroup();
    //     this.getMyCollect();
    //     this.getMyStudio();
    //     this.getMyRecord();
        
    // }

    getMyOrder(){
        fetch("http://localhost:3000/api/laorder/" + uid)
        .then(res => res.json())
        .then(order => this.setState({
            order:order
        }))
    }

    getMyGroup(){
        fetch("http://localhost:3000/api/lagroup/" + uid)
        .then(res => res.json())
        .then(group => this.setState({
            group:group
        }))
    }

    getMyCollect(){
        fetch("http://localhost:3000/api/lacollect/" + uid)
        .then(res => res.json())
        .then(collect => this.setState({
            collect:collect
        }))
    }

    getMyStudio(){
        fetch("http://localhost:3000/api/lastudio/" + uid)
        .then(res => res.json())
        .then(studio => this.setState({
            studio:studio
        }))
    }

    getMyRecord(){
        fetch("http://localhost:3000/api/larecord/" + uid)
        .then(res => res.json())
        .then(record => this.setState({
            record:record
        }))
    }
    
}

export default Labby;