import React, { Component } from 'react';
import './Register.scss';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class MemberLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = (evt) => {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({ 
            [key]:value
        })
    }

    logHandler = (evt)=> {
        evt.preventDefault();

        console.log("===MemberLogin 登入的資料(子元件)===");
        console.log(this.state); // {email: "test@mail.com", password: "123456"}
        this.props.memberLogin(this.state);
    }

    render(){
        return(
            <React.Fragment>
                    <div className="text-center mb-3">
                        <img className="logreg_user_img" src={"../img/users/user.svg"}></img>
                    </div>
                    <h3 className="text-center">會員登入</h3>
                    <div className="logreg_title_line mb-2"></div>

                    <form>
                    {/* <form onSubmit={this.logHandler}> */}
                        <div className="form-group">
                            <label htmlFor="email"><span className="required_style">*</span> 電子信箱</label>
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="請輸入您的 E-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><span className="required_style">*</span> 密碼</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="請輸入密碼" required />
                        </div>
                        <div className="text-center">
                            {/* <button type="submit" className="btn btn-primary mr-3">登入</button> */}
                            <button type="button" className="btn btn-primary" data-dismiss="modal" data-type="del" onClick={this.logHandler}>登入</button>
                        </div>
                    </form>

            </React.Fragment>
        )
    }
}

export default MemberLogin;