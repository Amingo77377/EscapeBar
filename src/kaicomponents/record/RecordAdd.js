import React, { Component } from 'react';
import './Record.scss';

var uid = null;
var today = new Date();

class MemberAdd extends Component {
    constructor(props){
        super(props)
        console.log(props);
        this.initState = {
            uid:"",
            gid:"1",
            score:"",
            record_pic:"",
            play_review:"",
            play_date:"",
            create_at: ""
        }
        this.state = this.initState; // 設定 state 初始值
    }
    
    handleChange = (evt) => {

        evt.preventDefault();
        
        switch (evt.target.id) {
            case 'record_pic':
                this.setState({ 
                    record_pic: evt.target.files[0]
                });
                break;

            default:
                
                this.setState({ 
                    [evt.target.id]: evt.target.value,
                    uid: uid,
                    create_at: today
                });
        }
    }

    regHandler = (evt)=> {
        console.log("===MemberRecord 新增的資料===");
        console.log(this.state);
        this.props.memberRecord(this.state); // 將新增的資料傳給 Record 父元件，memberRecord > function: recordHandler
        this.setState(this.initState); // 註冊成功後，清除所有欄位資料
        evt.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <button type="button" className="btn btn-primary btn_style" data-toggle="modal" data-target="#exampleModal">
                    新增紀錄遊戲
                    </button>
                </div>
                
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">紀錄遊戲</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="score">闖關分數</label>
                                    <input type="text" id="score" value={this.state.score} onChange={this.handleChange} className="form-control" placeholder="00:00" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="play_date">遊玩日期</label>
                                    <input type="date" id="play_date" value={this.state.play_date} onChange={this.handleChange} className="form-control" placeholder="play_date" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="record_pic">闖關照片</label>
                                    {/* <input type="text" id="record_pic" value={this.state.record_pic} onChange={this.handleChange} className="form-control" placeholder="record_pic" /> */}
                                    <input type="file" id="record_pic" name="record_pic" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="play_review">遊玩心得</label>
                                    <textarea rows="4" cols="50" id="play_review" value={this.state.play_review} onChange={this.handleChange} className="form-control" placeholder="寫下你的遊玩心得..."></textarea>
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.regHandler}>新增</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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

        }
    }

}

export default MemberAdd;