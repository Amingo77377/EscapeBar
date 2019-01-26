import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import moment from 'moment';
import './LaGroup.scss';

class LaGroup extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                
                {
                    this.props.group.map(group =>

                        <div class="row">
                            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <img className="lag_img" src={"../img/game/"+group.IMG_NAME}></img>
                            </div>
                            <div class="col-5 col-sm-7 col-md-7 col-lg-7 col-xl-7 lao-font-size">
                                <div>您於<span className="date_style"> {moment(group.t_created_at).format("YYYY/MM/DD")} </span>發起了一項揪團</div>
                                <div><span className="name_style">{group.PRO_NAME}</span></div>
                                <div>揪團進度，還差<span className="date_style"> {group.ask_people} </span>名隊友</div>
                                <div>距離揪團截止：<span className="date_style"> {moment(group.t_deadline, "YYYYMMDD").fromNow()} </span></div>
                            </div>
                            <div class="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">
                                <Link to="/center/group"><button className="btn btn-warning btn_style">查看我的揪團</button></Link>
                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default LaGroup;