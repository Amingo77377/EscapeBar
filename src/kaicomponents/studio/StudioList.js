import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Studio.scss';

class StudioList extends Component {
    constructor(props){
        super(props)
    }

    handler = (evt) => {
        console.log("===StudioList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.studioModify(evt.target.dataset.id, evt.target.dataset.type);
    }

    render(){
        return(
            <React.Fragment>
                
                {
                    this.props.studios.map(studio =>

                        <div class="row mb-3">
                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                            <NavLink to={{pathname: `/companyList/companyInfo/${studio.cid}/${studio.city_id}`,state: {sid: studio.sid}}}>
                                <img className="studio_img" src={"../img/company/default/"+studio.c_logo}></img>
                            </NavLink>
                            </div>
                            <div class="col-6 col-sm-8 col-md-8 col-lg-8 col-xl-8 align-self-center">
                                <div><span className="studio_cname name_style">{studio.c_name}</span></div>
                                <div className="studio_title_line mt-2 mb-3"></div>
                                {/* <div>工作室簡介：{studio.c_intro}</div> */}
                                {/* <div>工作室網站：<a href={studio.c_website} target="_blank">{studio.c_website}</a></div> */}
                            </div>
                            {/* <div class="col-1">

                            </div> */}
                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 align-self-center">

                                {/* 取消追蹤 */}
                                <button type="button" className="btn btn-primary btn_style" data-toggle="modal" data-target={(`#exampleModal${studio.mts_id}`)}>
                                取消追蹤
                                </button>

                                <div className="modal fade" id={(`exampleModal${studio.mts_id}`)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">取消追蹤</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                你確定要取消 "{studio.c_name}" 的追蹤嗎？
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={studio.mts_id} data-type="del" onClick={this.handler}>確定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    )
                }

            </React.Fragment>
        )
    }
}

export default StudioList;