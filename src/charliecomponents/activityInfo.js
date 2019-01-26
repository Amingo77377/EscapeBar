import React, {Component} from 'react';
import $ from 'jquery';
import 'jquery-circle-progress';
import './charlie.scss';

class activityInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            activity: '',
            member: '',
            value: 1,
            btnActive: true,
            // 假設的userid，需由登入系統判定
            user: 'u087',
        };
        this.tid = props.match.params.id;
    }
    NOW = () => {
        var date = new Date();
        var yyyy = date.getFullYear();
        var dd = date.getDate();
        var mm = (date.getMonth() + 1);
    
        if (dd < 10)
            dd = "0" + dd;
        if (mm < 10)
            mm = "0" + mm;
    
        var cur_day = yyyy + "-" + mm + "-" + dd;
    
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds();
    
        if (hours < 10)
            hours = "0" + hours;
        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;
    
        return cur_day + " " + hours + ":" + minutes + ":" + seconds;
    }

    minusHandler = () =>{
        if($("#count").val()>1){
            var num = +$("#count").val() - 1;
            this.setState({
                value: num,
            });
        }
    }

    plusHandler = () =>{
        // 補設定if判斷最大人數不可以超過揪團人數上限
        if(this.state.value === this.state.activity.ask_people){
            return;
        }else{
            var num = +$("#count").val() + 1;
            this.setState({
                value: num,
            });
        }
    }

    changeHandler = (evt) =>{
        this.setState({
            value: evt.target.value,
        });
    }

    myTime = (t0) =>{
        var t = new Date(t0);
        return(
            t.getFullYear() + '-' +('0' + (t.getMonth()+1)).slice(-2)+ '-' +  t.getDate() + ' '+t.getHours()+ ':'+('0' + (t.getMinutes())).slice(-2)+ ':'+t.getSeconds()
        )
    }
    
    myTimeShow = (t0) =>{
        var t = new Date(t0);
        return(
            t.getFullYear() + '-' +('0' + (t.getMonth()+1)).slice(-2)+ '-' +  t.getDate() + ' '  + t.getHours()+ ':'+('0' + (t.getMinutes())).slice(-2)
        )
    }
    
    joinHandler = () =>{
        if(this.state.activity.current_people === this.state.activity.goal_people){
            return;
        }else{
            // 判斷會員登入狀態 if沒有登入->會員登陸頁 else 參與
            this.setState({
                activity: Object.assign({}, this.state.activity, {
                    current_people: this.state.activity.current_people,
                    ask_people: this.state.activity.ask_people,
                    t_created_at: this.myTime(this.state.activity.t_created_at),
                    sel_time: this.myTime(this.state.activity.sel_time),
                    t_deadline: this.myTime(this.state.activity.t_deadline),
                })
            },function(){
                const now = this.NOW();
                fetch('http://localhost:3000/startActivity/activity_joinRecord/',{
                    method: 'POST',
                    body: JSON.stringify({
                        tid: this.tid,
                        join_uid: this.state.user,
                        join_people: this.state.value,
                        t_join: now,
                    }),
                    headers: new Headers({'Content-Type':'application/json'})
                }).then(res=>res.json())
                .then(data=>{
                    alert(data.message);
                });
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="bangSetMore">
                    <div className="container mt-4 bangSet">
                        <div className="row" id="activityInfoBox">
                            <div className="col-8">
                                <figure className="" className="gameFigure">
                                    <img className="activityInfoGameImg" src={`/img/game/${this.state.activity.IMG_NAME}`} alt="game_pic" />
                                </figure>
                            </div>
                            <div className="col-4">
                                <div className="mx-2">
                                    <p>由<strong>{this.state.member.nickname}</strong> 發起的揪團活動</p>
                                    <hr></hr>
                                    {/* 設工作室及遊戲的超連結 */}
                                    <h2>{this.state.activity.PRO_NAME}</h2>
                                    <p id="activityInfo_s_name">{this.state.activity.s_name}</p>
                                    <table className="mx-1" id="activityInfo_detail">
                                        <tbody>
                                            <tr>
                                                <td><i className="fas fa-map-marker-alt fa-xs mb-1"></i></td>
                                                <td className="ml-2">{this.state.activity.s_add}</td>
                                            </tr>
                                            <tr>
                                                <td><i className="far fa-clock fa-xs"></i></td>
                                                <td className="ml-2">{this.myTimeShow(this.state.activity.sel_time)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <div className="row mt-4">
                                        <div className="col-4">
                                            <div className="circleProgress" id="circleProgress">
                                                <strong></strong>
                                            </div>
                                        </div>
                                        <div className="col-8" id="progressInfo">
                                            <p id="activity_goal_people">目標人數&nbsp;{this.state.activity.goal_people}&nbsp;名玩家</p>
                                            <h4>剩下 {this.state.activity.ask_people}  名缺額</h4>
                                        </div>
                                    </div>

                                    <div className="row mt-4" id="setPeopleBox">
                                        <p className="col-4">設定人數：</p>
                                        <div className="col-8 row align-items-center">
                                            <div className="cssCircle" onClick={this.minusHandler}>&#8211;</div>
                                            <input type="text" id="count" className="text-center" value={this.state.activity.current_people === this.state.activity.goal_people ? '0' : this.state.value} size="8" onChange={this.changeHandler}/>
                                            <div className="cssCircle" onClick={this.plusHandler}>&#43;</div>
                                        </div>
                                    </div>
                                        {/* 修改設定，若該帳號已寄送揪團，則顯示參與成功 */}
                                    <button className={`btn btn-primary mt-3 col-12 ${this.state.activity.current_people === this.state.activity.goal_people ? 'disabled' : ''}`} id="hostNewActivityBtn" onClick={this.joinHandler}>{this.state.activity.current_people === this.state.activity.goal_people ? '揪團已額滿' : '參與揪團'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    

    getActivity = () =>{
        fetch("http://localhost:3000/startActivity/activity_list/" + this.tid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                activity: data[0]
            });
            // 載入會員資料
            this.getMember();

            // 載入揪團進度circleProgressBar方法
            this.circleProgressBar();
        });
    }

    reGetActivity = () =>{
        fetch("http://localhost:3000/startActivity/activity_list/" + this.tid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                activity: data[0]
            });
            this.circleProgressBar();
        });
    }


    getMember = () =>{
        fetch("http://localhost:3000/member/memberInfo/" + this.state.activity.act_uid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                member: data[0]
            });
        })
    }

    componentDidMount = () =>{
        this.getActivity();
    }


    // 揪團進度circleProgressBar，需npm install jquery-circle-progress && import $ from 'jquery' && import 'jquery-circle-progress'
    circleProgressBar = () =>{
        var progressBarOptions = {
            startAngle: -1.55,
            size: 80,
            value: (this.state.activity.current_people / (this.state.activity.goal_people)),
            fill: {
                gradient: ['#9DE3E3', '#4AA0B5']
            }
        }
        
        $('.circleProgress').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').html(Math.round(100 * String(stepValue.toFixed(2))) + '<i>%</i>');
        });
    }
}

export default activityInfo;