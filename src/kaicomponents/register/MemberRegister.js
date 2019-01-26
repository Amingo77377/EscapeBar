import React, { Component } from 'react';
import './Register.scss';

class MemberRegister extends Component {
    constructor(props){
        super(props)
        console.log(props);
        this.initState = {
            uid:"",
            email:"",
            password:"",
            password2:"",
            nickname:"逃脫勇者",
            gender:"",
            birthday:"0000-00-00",
            city_id:"",
            address:"",
            mobile:"",
            user_pic:"u000.jpg",
            create_at: "",
            // error: []
        }
        this.state = this.initState; // 設定 state 初始值
    }

    // showValidationErr(elm, msg) {
    //     this.setState((prevState) => ({
    //       errors: [
    //         ...prevState.errors, {
    //           elm,
    //           msg
    //         }
    //       ]
    //     }));
    // }

    // clearValidationErr(elm) {
    //     this.setState((prevState) => {
    //         let newArr = [];
    //         //Add all elements from the prev array to the new one that has a different element
    //         for (let err of prevState.errors) {
    //             if (elm != err.elm) {
    //                 newArr.push(err);
    //             }
    //         }
    //         return {errors: newArr};
    //     });
    // }

    // onEmailChange(e) {
    //     this.setState({email: e.target.value});
    //     this.clearValidationErr("email");
    // }
    
    // onPasswordChange(e) {
    //     this.setState({password: e.target.value});
    //     this.clearValidationErr("password");
    // }

    // onPassword2Change(e) {
    //     this.setState({password2: e.target.value});
    //     this.clearValidationErr("password2");
    // }

    handleChange = (evt) => {
        console.log(evt.target.id); // 取得欄位的 id
        console.log(evt.target.value); // 取得這個 id 欄位的值
        let key = evt.target.id;
        let value = evt.target.value;
        
        let user_id = "u"+Math.floor(Math.random()*1000)+1;
        const today = new Date();
        this.setState({ // 設定更改後的值
            [key]:value, // email: test@mail.com
            uid: user_id,
            create_at: today // 設定註冊的日期為今天
        })
    }

    regHandler = (evt)=> {
        
        console.log("===MemberRegister 註冊的資料===");
        console.log(this.state);

        if(this.state.password != this.state.password2) {
            alert("您的密碼不一致，請重新再確認！")
            evt.preventDefault();
            this.setState(this.initState);
        } else {
            evt.preventDefault();
            delete this.state.password2;
            this.props.memberReg(this.state); // 將註冊的資料傳給 Register 父元件，memberReg > function: regHandler
            this.setState(this.initState); // 註冊成功後，清除所有欄位資料
        }

        // evt.preventDefault();
        // this.props.memberReg(this.state); // 將註冊的資料傳給 Register 父元件，memberReg > function: regHandler
        // this.setState(this.initState); // 註冊成功後，清除所有欄位資料

        // if (this.state.email == "") {
        //     this.showValidationErr("email", "Email Cannot be empty!");
        // }
        // if (this.state.password == "") {
        //     this.showValidationErr("password", "Password Cannot be empty!");
        // }
        // if (this.state.password2 == "") {
        //     this.showValidationErr("password2", "Password2 Cannot be empty!");
        // }

    }

    render(){

        // let emailErr = null, passwordErr = null, password2Err = null;
        // //Loop and find which ones has the error
        // for (let err of this.state.errors) {
        // //Assign the validation error message 

        // if (err.elm == "email") {
        //     emailErr = err.msg;
        // }
        // if (err.elm == "password") {
        //     passwordErr = err.msg;
        // }
        // if (err.elm == "password2") {
        //     password2Err = err.msg;
        // }
        
        return(
            <React.Fragment>
                    <div className="text-center mb-3">
                        <img className="logreg_user_img" src={"../img/users/user.svg"}></img>
                    </div>
                    <h3 className="text-center">加入會員</h3>
                    <div className="logreg_title_line mb-2"></div>

                    <form>
                    {/* <form onSubmit={this.regHandler}> */}
                        {/* <div className="form-group">
                            <label htmlFor="uid">uid</label>
                            <input type="text" id="uid" value={this.state.uid} onChange={this.handleChange} className="form-control" placeholder="id" />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="email"><span className="required_style">*</span> 電子信箱</label>
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="請輸入您的 E-mail" required />
                            {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><span className="required_style">*</span> 密碼</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="請輸入密碼" required />
                            {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2"><span className="required_style">*</span> 確認密碼</label>
                            <input type="password" id="password2" value={this.state.password2} onChange={this.handleChange} className="form-control" placeholder="請再輸入一次密碼" required />
                            {/* <small className="danger-error">{password2Err ? password2Err : ""}</small> */}
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="nickname">nickname</label>
                            <input type="text" id="nickname" value={this.state.nickname} onChange={this.handleChange} className="form-control" placeholder="nickname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">gender</label>
                            <input type="text" id="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" placeholder="gender" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">birthday</label>
                            <input type="text" id="birthday" value={this.state.birthday} onChange={this.handleChange} className="form-control" placeholder="birthday" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city_id">city_id</label>
                            <input type="text" id="city_id" value={this.state.city_id} onChange={this.handleChange} className="form-control" placeholder="city_id" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">address</label>
                            <input type="text" id="address" value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">mobile</label>
                            <input type="text" id="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" placeholder="mobile" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_pic">user_pic</label>
                            <input type="text" id="user_pic" value={this.state.user_pic} onChange={this.handleChange} className="form-control" placeholder="user_pic" />
                        </div> */}
                        <div className="text-center">
                            {/* <button type="submit" className="btn btn-primary mr-3">註冊</button> */}
                            <button type="button" className="btn btn-primary" data-dismiss="modal" data-type="del" onClick={this.regHandler}>註冊</button>
                        </div>
                    </form>

            </React.Fragment>
        )
    }
}

export default MemberRegister;