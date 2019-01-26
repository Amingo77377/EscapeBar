import React, { Component } from 'react';
import './Register.scss';

import MemberLogin from './MemberLogin';
import MemberRegister from './MemberRegister';

import {withRouter} from "react-router-dom";

// import cookie from 'react-cookie';

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: [],

            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    regHandler =  (datas) => {// datas 為子元件傳過來的資料
        console.log("===Member reghandler===");
        console.log(datas);

        // 呼叫 Restful API 新增資料 POST
        fetch("http://localhost:3000/api/members/",{
            method: 'POST',
            body: JSON.stringify(datas), // datas 為傳進來的 json 物件，須轉為 json 字串做傳遞
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json()) // 取得 Restful API 回傳的結果 {message: "新增成功"}，並轉成 json 格式
        .then(data => {
            alert(data.message);
        })
    }

    loginHandler = (datas) => {
        console.log("===Member loginHandler 登入的資料(子傳父元件)===");
        console.log(datas); // {email: "test@mail.com", password: "123456"}

        fetch("http://localhost:3000/api/login",{
            method: 'POST',
            body: JSON.stringify(datas),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())

        .then(user => { // 將 json 格式存放在 user
            
            console.log("======後端回傳登入的會員資料======");
            
            console.log(user);
            console.log(user.session);
            console.log(user.message);
            // console.log(user.uid);

            alert(user.message.message);
            switch (user.message.message) {
                case "登入成功！":
                    this.setState({ user:user.session });
                    localStorage.setItem('userId', JSON.stringify(user.session)); // 將會員編號存於 localStorage
                    // cookie.set('user', JSON.stringify(user.session), { path: '/' });
                    // window.location.href=""; // 導回當前頁面
                    if(window.location.href === `http://localhost:3001/proList/products/reservation/`){
                        this.props.history.push("/center")
                        console.log("buy")
                    }else{
                        console.log('aaa')
                        window.location.reload(); // refresh page
                    }
                    

                    // this.props.history.push("/") // 導到會員中心頁面
                    break;
                case "密碼錯誤！":
                    // this.props.history.push('/') // 導回首頁
                    break;
                case "此帳號尚未註冊！":
                    // this.props.history.push('/') // 導到首頁
                    break;
            }

        })
    }

    render(){
        return(
            <React.Fragment>
                {/* <div class="row">
                    <div class="col-sm">
                    <MemberLogin memberLogin = {this.loginHandler} />
                    </div>
                    <div class="col-sm">
                    <MemberRegister memberReg = {this.regHandler} />
                    </div>
                </div> */}

                <div className="root-container mt-3">
                    <div className="box-controller">
                        <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)} >
                            登入
                        </div>
                        <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)} >
                            註冊
                        </div>
                    </div>
                    <div className="box-container">
                        
                        { this.state.isLoginOpen && <MemberLogin memberLogin = {this.loginHandler} /> }
                        { this.state.isRegisterOpen && <MemberRegister memberReg = {this.regHandler} /> }

                    </div>
                </div>  

            </React.Fragment>
        )
    }
}

// export default Register;
export default withRouter(Register);