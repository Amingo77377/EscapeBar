import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LaCollect.scss';

class LaCollect extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                    <div className="d-flex flex-wrap">
                        {
                            this.props.collect.map(collect =>

                                <div className="card laccard mr-4 ml-4 mb-2 mt-3">
                                <NavLink to = {{pathname:`/proList/products/${collect.PRO_SEQ}`, state: {id: collect.PRO_SEQ}}}><img className="card-img-top lacimg" src={"../img/game/"+collect.IMG_NAME}></img></NavLink>
                                {/* <img className="card-img-top lacimg" src={"../img/game/"+collect.IMG_NAME}></img> */}
                                    

                                    <div className="lacclogo">
                                        <img className="lac-circle" src={"../img/company/40/"+collect.c_logo}></img>
                                    </div>
                                    
                                    <div className="card-body lac_title">
                                        <p className="card-text">{collect.PRO_NAME}</p>
                                    </div>
                                </div>

                            )
                            
                        }
                    </div>
                    <div class="row">
                        <div class="col-4 col-sm-10 col-md-10 col-lg-10 col-xl-10"></div>
                        <div class="col-8 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">
                            <Link to="/center/collect"><button className="btn btn-warning btn_style">查看我的收藏</button></Link>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default LaCollect;