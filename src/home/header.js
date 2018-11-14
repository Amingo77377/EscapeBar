import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './header.scss'
class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="header">
                    <div id="header-main">
                        <div className="w80" id="main-contain">
                            <img src="" alt="logo"/>
                            <div id="login"><a>登入</a></div>
                        </div>
                    </div>
                    <div id="mainNav">
                        <div className="w80">
                            {/* <ul>
                                <li><link className="nav-link" to="/games">遊戲列表</link></li>
                                <li><link className="nav-link" to="/map">密室地圖</link></li>
                                <li><link className="nav-link" to="/ad">本月主打</link></li>
                                <li><link className="nav-link" to="/workshop">工作室</link></li>
                                <li><link className="nav-link" to="/group">我要揪團</link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
export default Header;