import React, { Component } from 'react';
import moment from 'moment';
import './Member.scss';

class MemberModify extends Component {
    constructor(props){
        super(props)
        this.initState = {
            // uid:"",
            // email:"",
            password:"",
            nickname:"",
            gender:"",
            birthday:"",
            city_id:"",
            address:"",
            mobile:"",
            user_pic:"",
            // create_at: ""
        }
        this.state = this.initState; // 設定 state 初始值
    }
    handleChange = (evt) => {

        evt.preventDefault();
        switch (evt.target.id) {
            case 'user_pic':
                this.setState({ 
                    user_pic: evt.target.files[0]
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
        console.log(this.state);
        this.props.memberUpdate(this.state); // 將修改的資料傳給 Member 父元件，memberUpdate > function: updateHandler
        
    }

    static getDerivedStateFromProps(props, state) {
        if (props.modifyData.uid !== state.uid) {
            return {
                uid: props.modifyData.uid,
                email: props.modifyData.email,
                password: props.modifyData.password,
                nickname: props.modifyData.nickname,
                gender: props.modifyData.gender,
                birthday: props.modifyData.birthday,
                city_id: props.modifyData.city_id,
                address: props.modifyData.address,
                mobile: props.modifyData.mobile,
                user_pic: props.modifyData.user_pic
            }
        }
        return null;
    }

    render(){
        return(
            <React.Fragment>
                <h4>個人資料</h4>
                <div className="mem_title_line mb-2"></div>
                {/* 受控表單 -> onChange event */}
                <form onSubmit={this.updateHandler}>
                    {/* <div className="form-group">
                        <label htmlFor="uid">uid</label>
                        <input type="text" id="uid" value={this.state.uid} onChange={this.handleChange} className="form-control" placeholder="id" />
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="email" />
                    </div> */}
                    
                    <div class="row">
                        <div class="col">
                            <div className="form-group">
                                <label htmlFor="password">密碼</label>
                                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nickname">暱稱</label>
                                <input type="text" id="nickname" value={this.state.nickname} onChange={this.handleChange} className="form-control" placeholder="nickname" />
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group">
                                <label htmlFor="gender">性別</label>
                                {/* <input type="text" id="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" placeholder="gender" /> */}
                            
                                <select id="gender" value={this.state.gender} onChange={this.handleChange} className="form-control">
                                    <option selected disabled>未選擇</option>
                                    <option>男</option>
                                    <option>女</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">生日</label>
                                {/* <input type="text" id="birthday" value={this.state.birthday} onChange={this.handleChange} className="form-control" placeholder="1990/01/01" /> */}
                                <input type="text" id="birthday" value={moment(this.state.birthday).format("YYYY/MM/DD")} onChange={this.handleChange} className="form-control" placeholder="1990/01/01" />
                                {/* <input type="date" id="birthday" value={this.state.birthday} onChange={this.handleChange} className="form-control" placeholder="1990/01/01" /> */}

                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group">
                                <label htmlFor="city_id">城市</label>
                                {/* <input type="text" id="city_id" value={this.state.city_id} onChange={this.handleChange} className="form-control" placeholder="city_id" /> */}

                                <select id="city_id" value={this.state.city_id} onChange={this.handleChange} className="form-control">
                                    <option selected disabled>未選擇</option>
                                    <option>台北市</option>
                                    <option>新北市</option>
                                    <option>基隆市</option>
                                    <option>桃園市</option>
                                    <option>新竹市</option>
                                    <option>新竹縣</option>
                                    <option>苗栗縣</option>
                                    <option>台中市</option>
                                    <option>彰化縣</option>
                                    <option>南投縣</option>
                                    <option>雲林縣</option>
                                    <option>嘉義市</option>
                                    <option>嘉義縣</option>
                                    <option>台南市</option>
                                    <option>高雄市</option>
                                    <option>屏東縣</option>
                                    <option>台東縣</option>
                                    <option>花蓮縣</option>
                                    <option>宜蘭縣</option>
                                    <option>離島</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">地址</label>
                                <input type="text" id="address" value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="address" />
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group">
                                <label htmlFor="mobile">手機</label>
                                <input type="number" id="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" placeholder="mobile" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_pic">頭像</label>
                                {/* <input type="text" id="user_pic" name="user_pic" value={this.state.user_pic} onChange={this.handleChange} className="form-control" placeholder="user_pic" /> */}
                                <input type="file" id="user_pic" name="user_pic" onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="text-center mb-3"><button type="submit" className="btn btn-primary pr-5 pl-5">修改</button></div>
                </form>
            </React.Fragment>
        )
    }
}

export default MemberModify;