import React, { Component } from 'react';
import './Group.scss';
import moment from 'moment';

class GroupJoin extends Component {
    constructor(props){
        super(props)
        this.state = {　// 設定 state 初始值
            groupsjoin: []
        }
    }

    render(){
        
        return(
            <React.Fragment>
                {
                    this.state.groupsjoin.map(join =>
                        <tr className="lao-font-size">
                            <td><img className="headshot rounded-circle joinuser-img" src={"http://localhost:3000/images/users/"+join.user_pic}></img> {join.email}</td>
                            <td>{join.join_people} 名隊友</td>
                            <td>{moment(join.t_join).format("MM/DD")}</td>
                        </tr>
                    )
                }
                
            </React.Fragment>
        )
    }
    
    componentDidMount(){
        console.log("========tid========");
        console.log(this.props.tid);
        this.getGroupsJoin();
    }

    getGroupsJoin(){
        // fetch，ajax 新物件 (XMLHttpRequest，ajax 舊物件)
        fetch("http://localhost:3000/api/groupsjoin/" + this.props.tid) // 預設為 GET
        .then(res => res.json()) // 取得 Restful API 回傳的結果，並轉成 json 格式
        .then(groupsjoin => {
            this.setState({ // groupsjoin 接收轉成 json 的結果，this.setState() 更新資料
                groupsjoin:groupsjoin
            })
        })
    }

}

export default GroupJoin;