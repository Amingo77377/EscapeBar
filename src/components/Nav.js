import React, { Component } from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './main.scss'

import {withRouter} from "react-router-dom"; // kai
import Register from '../kaicomponents/register/Register'; // kai

class Nav extends Component {
    constructor(props){
        super(props)
    }

    logout(e) {
        e.preventDefault()

        localStorage.removeItem('userId')
        this.props.history.push("/indexbody"); // 導到首頁
    }

    render(){

        // const loginRegLink = (
        //     <ul className="navbar-nav">
        //         <li className="nav-item">
        //             <button type="button" className="btn btn-light mt-1" data-toggle="modal" data-target="#exampleModal">
        //             登入|註冊
        //             </button>
        //             <br />
        //             <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //                 <div className="modal-dialog" role="document">
        //                     <div className="modal-content">
        //                         <Register />
        //                     </div>
        //                 </div>
        //             </div>
        //         </li>

        //     </ul>
        // )

        // const userLink = (
        //     <React.Fragment>
        //         <div className="navItem">
        //             <Link className="linkClear" to="/center">會員中心</Link>
        //         </div>
        //         <div className="navItem">
        //             <Link className="linkClear" to="" onClick={this.logout.bind(this)}>登出</Link>
        //         </div>
        //     </React.Fragment>
        // )

        return(
            <React.Fragment>
                <nav className="navList">              
                    <div className="navItem"><Link className="linkClear" to="/companyList">工作室列表</Link></div>
                    <div className="navItem"><NavLink className="linkClear" to={{pathname: `/proList`, state: {str: `nav`, type: `nav`}}}>遊戲列表</NavLink></div>
                    <div className="navItem"><Link className="linkClear" to="/article/topic201812">本月主打</Link></div>
                    <div className="navItem"><Link className="linkClear" to="/map">密室地圖</Link></div>
                    <div className="navItem"><Link className="linkClear" to="/startActivity">揪團一起玩</Link></div>

                    {/* {localStorage.getItem('userId') ? userLink : loginRegLink} */}
                </nav>
                    
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

            </React.Fragment>
        );
    }
}
// export default Nav;
export default withRouter(Nav); // kai