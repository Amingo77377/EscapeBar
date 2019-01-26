import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";

import Register from './register/Register';

class Nav extends Component {
    constructor(props){
        super(props)
    }

    logout(e) {
        e.preventDefault()

        localStorage.removeItem('userId')
        // this.props.history.push("/home"); // 導到首頁
    }

    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/register">登入|註冊</Link>
                </li> */}

                <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
                    登入|註冊
                    </button>
                    <br />
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <Register />
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/center">會員中心</Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logout.bind(this)} className="nav-link">登出</a>
                </li>
            </ul>
        )

        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Escape bar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">首頁</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/register">登入|註冊</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/center">會員中心</Link>
                            </li>
                            <li className="nav-item">
                            <a href="" onClick={this.logout.bind(this)} className="nav-link">登出</a>
                            </li> */}
                        </ul>
                        {localStorage.getItem('userId') ? userLink : loginRegLink} {/* React 條件渲染: 三元運算子 */}
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

// export default Nav;
export default withRouter(Nav);