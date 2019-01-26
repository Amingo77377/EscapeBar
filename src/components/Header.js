import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './main.scss'

import {withRouter} from "react-router-dom"; // kai
import Register from '../kaicomponents/register/Register'; // kai

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobileMenuStatus: false,
        }
    }

    logout(e) {
        e.preventDefault()

        localStorage.removeItem('userId')
        // this.props.history.push("/indexbody"); // 導到首頁
        window.location.reload()
    }

    mobileMenuOpen(){
        this.setState({
            mobileMenuStatus: true,
        })
    }
    mobileMenuClose(){
        this.setState({
            mobileMenuStatus: false,
        })
    }
    
    componentDidMount(){
        var scrollLast=0;
        
    }

    render(){
        const loginRegLink = (
            <React.Fragment>

                <ul className="navbar-nav d_none mobileMenuItem">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/register">登入|註冊</Link>
                    </li> */}

                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-dark login-style2 " data-toggle="modal" data-target="#exampleModal">
                        登入 | 註冊
                        </button>
                        <br />
                    </li>

                </ul>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <Register />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

        const userLink = (
            <React.Fragment>
                <div className="login-style d_none">
                    <Link className="linkClear" to="" onClick={this.logout.bind(this)}><div className="login-style mobileMenuItem">登出</div></Link>
                    
                    <Link className="linkClear" to="/center"><div className="login-style mobileMenuItem">會員中心</div></Link>
                </div>
            </React.Fragment>
        )

        const loginRegLink2 = (
            <React.Fragment>

                <ul className="navbar-nav mobileMenuItem">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/register">登入|註冊</Link>
                    </li> */}

                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-dark login-style2 " data-toggle="modal" data-target="#exampleModal">
                        登入 | 註冊
                        </button>
                        <br />
                    </li>

                </ul>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <Register />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

        const userLink2 = (
            <React.Fragment>
                <div className="login-style">
                    <Link className="linkClear" to="" onClick={this.logout.bind(this)}><div className="login-style mobileMenuItem">登出</div></Link>
                    
                    <Link className="linkClear" to="/center"><div className="login-style mobileMenuItem">會員中心</div></Link>
                </div>
            </React.Fragment>
        )

        // let mobileMenuToggle = this.state.mobileMenuStatus ? "mobileMenuOpen" : "" ;

        return(
            <React.Fragment>
                <header className="header">
                    <div className="mainLogo">
                        {/* <Link to="/indexbody"><img src="./img/escapebarlogo.png"></img></Link> */}
                        <Link to="/indexbody"><img src={require(`../images/Group6.svg`)}></img></Link>
                    </div>
                    <div className="memberStatus">
                        {/* <span>登入</span>
                        <span> | </span>
                        <span>註冊</span> */}
                    </div>
                    
                        {localStorage.getItem('userId') ? userLink : loginRegLink}
                        

                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Escape bar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">首頁</Link>
                            </li>
                        </ul>
                        {localStorage.getItem('userId') ? userLink : loginRegLink}
                    </div>
                </nav> */}

                    <div className={`mobileMenuOpenBtn ${this.state.mobileMenuStatus ? "d_none" : "d_block"}`} onClick={this.mobileMenuOpen.bind(this)}>
                        <i class="fas fa-bars"></i>
                    </div>
                    <div className={`mobileMenuCloseBtn ${this.state.mobileMenuStatus ? "d_block" : "d_none"}`} onClick={this.mobileMenuClose.bind(this)}>
                        <i class="fas fa-times"></i>
                    </div>
                </header>

                <div id="" className={`mobileMenu ${this.state.mobileMenuStatus ? "d_block" : ""}`}>

                    <div className="">
                        {localStorage.getItem('userId') ? userLink2 : loginRegLink2}
                    </div>

                    <div className="mobileMenuItem">
                        <ul className="mobileMenuItemChild">主要功能
                            <Link className="linkClear" to="/proList"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>找遊戲</li></Link>
                            <Link className="linkClear" to="/companyList"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>找工作室</li></Link>
                            <Link className="linkClear" to="/article/topic201812"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>本月主打</li></Link>
                            <Link className="linkClear" to="/map"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>用地圖找</li></Link>
                            <Link className="linkClear" to="/startActivity"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>揪團一起玩</li></Link>
                        </ul>
                    </div>
                    <div className="mobileMenuItem">關於密室逃脫
                        {/* <ul className="mobileMenuItemChild"> */}
                            {/* <Link className="" to="/article/whatisrealescape"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>什麼是密室逃脫</li></Link>
                            <Link className="" to="/article/groupactivity"><li className="mobileMenuItemChildList"><i class="fas fa-chevron-right"></i>福委活動與教育訓練</li></Link> */}
                            {/* <li className="">密室逃脫的二三事</li> */}
                        {/* </ul> */}
                    </div>
                    <div className="mobileMenuItem">關於逃脫吧</div>
                    <div className="mobileMenuItem">與我們聯繫</div>
                </div>
                {/* <div className="goToTop">
                    <i class="fas fa-angle-double-up"></i>
                </div> */}
            </React.Fragment>
        );
    }
}
// export default Header;
export default withRouter(Header); // kai