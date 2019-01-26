import React, { Component } from 'react';
import './Record.scss';
import moment from 'moment';

class RecordModify extends Component {
    constructor(props){
        super(props)
        this.initState = {
            mrg_id:"",
            score:"",
            record_pic:"",
            play_review:"",
            play_date:"",
            create_at: ""
        }
        this.state = this.initState; // 設定 state 初始值
    }
    handleChange = (evt) => {
        // console.log(evt.target.id);
        // console.log(evt.target.value);
        // let key = evt.target.id;
        // let value = evt.target.value;
        // const today = new Date();
        // this.setState({
        //     [key]:value,
        //     create_at: today
        // })

        evt.preventDefault();
        switch (evt.target.id) {
            case 'record_pic':
                this.setState({ 
                    record_pic: evt.target.files[0]
                });
                break;
            default:
                this.setState({ 
                    [evt.target.id]: evt.target.value
                });
        }

    }

    updateHandler = (evt) => {
        evt.preventDefault();
        this.props.memberUpdate(this.state); // 將修改的資料傳給 Record 父元件，memberUpdate > function: updateHandler
        
    }

    static getDerivedStateFromProps(props, state) {
        if (props.modifyData.mrg_id !== state.mrg_id) {
            return {
                mrg_id: props.modifyData.mrg_id,
                score: props.modifyData.score,
                record_pic: props.modifyData.record_pic,
                play_review: props.modifyData.play_review,
                play_date: props.modifyData.play_date
            }
        }
        return null;
    }

    render(){
        return(
            <React.Fragment>
                <h4>遊戲紀錄修改</h4>
                <div className="mem_title_line mb-2"></div>
                {/* 受控表單 -> onChange event */}
                <form onSubmit={this.updateHandler}>
                    <div class="row">
                        <div class="col-3">
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <label htmlFor="score">闖關分數</label>
                                        <input type="text" id="score" value={this.state.score} onChange={this.handleChange} className="form-control" placeholder="score" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="play_date">遊玩日期</label>
                                        <input type="text" id="play_date" value={moment(this.state.play_date).format("YYYY/MM/DD")} onChange={this.handleChange} className="form-control" placeholder="play_date" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <div className="form-group">
                                <label htmlFor="play_review">遊玩心得</label>
                                <textarea rows="5" cols="50" id="play_review" value={this.state.play_review} onChange={this.handleChange} className="form-control" placeholder="寫下你的遊玩心得..."></textarea>
                            </div>
                        </div>
                        <div class="row-4">
                            <div class="col">
                                <div className="form-group">
                                    <label htmlFor="record_pic">闖關照片</label>
                                    {/* <input type="text" id="record_pic" value={this.state.record_pic} onChange={this.handleChange} className="form-control" placeholder="record_pic" /> */}
                                    <input type="file" id="record_pic" name="record_pic" onChange={this.handleChange} className="form-control" />
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary">修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default RecordModify;