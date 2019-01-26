import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LaStudio.scss';

class LaStudio extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>

                    <div className="d-flex flex-wrap">
                        {
                            this.props.studio.map(studio =>

                                <div className="las-items mb-2">
                                    <NavLink to={{pathname: `/companyList/companyInfo/${studio.cid}/${studio.city_id}`,state: {sid: studio.sid}}}>
                                        <img className="las-circle" src={"../img/company/default/"+studio.c_logo}></img>
                                    </NavLink>
                                    <div className="las-center">{studio.c_name}</div>
                                </div>

                            )
                        }
                    </div>

                    <div class="row">
                        <div class="col-4 col-sm-10 col-md-10 col-lg-10 col-xl-10"></div>
                        <div class="col-8 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">
                            <Link to="/center/studio"><button className="btn btn-warning btn_style">查看我的追蹤</button></Link>
                        </div>
                    </div>

            </React.Fragment>
        )
    }
}

export default LaStudio;