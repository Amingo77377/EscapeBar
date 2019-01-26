import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Collect.scss';

class CollectList extends Component {
    constructor(props){
        super(props)
       // console.log(this.props.collects);
        this.state = {
            collects:this.props.collects
        };
    }

    handler = (evt) => {
        console.log("===CollectList===");
        console.log(evt.target); // evt.target，觸發事件的這個按鈕
        console.log(evt.target.dataset.id); // 透過 dataset 物件來取得 data- 屬性的值 (會員編號 uid)
        this.props.collectModify(evt.target.dataset.id, evt.target.dataset.type);
    }

    render(){
        return(
            <React.Fragment>
                
                <div className="d-flex flex-wrap">
                {/* bootstrap card */}
                {
                    this.props.collects.map(collect =>
                        <div className="card colcard text-center mr-3 ml-3 mb-5 mt-3" key={collect.PRO_SEQ}>

                            <div>
                                <div>
                                    <img className="collect_img" src={"../img/game/"+collect.IMG_NAME}></img>
                                </div>

                                {/* <button type="button" className="btn btn-danger del-btn" data-toggle="modal" data-target="#exampleModal" data-id={collect.mcg_id} data-type="del" onClick={this.handler}>
                                X
                                </button> */}

                                <button type="button" className="btn btn-danger del-btn" data-toggle="modal" data-target={(`#exampleModal${collect.mcg_id}`)}>
                                X
                                </button>
                                <div className="modal fade" id={(`exampleModal${collect.mcg_id}`)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">取消收藏</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                你確定要取消 "{collect.PRO_NAME}" 的收藏嗎？
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={collect.mcg_id} data-type="del" onClick={this.handler}>確定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="collect_clogo" src={"../img/company/40/"+collect.s_logo}></img>
                                {/* <h5 className="card-title">{collect.mcg_id}</h5> */}
                                <h5 className="card-title">{collect.PRO_NAME}</h5>
                                
                                <NavLink to = {{pathname:`/proList/products/${collect.PRO_SEQ}`, state: {id: collect.PRO_SEQ}}} className="btn btn-primary">了解詳情</NavLink>
                                
                                <div className="row collect_info">
                                    <div className="col-sm">{collect.city_name}</div>
                                    <div className="col-sm">{collect.GAME_TIME}分</div>
                                    <div className="col-sm"><span className="collect_price_style">${collect.PRICE}起</span></div>
                                </div>

                            {/* <button type="button" className="btn btn-primary" data-dismiss="modal" data-id={collect.mcg_id} data-type="del" onClick={this.handler}>確定</button> */}
                            </div>

                        </div>
                    )
                }
                </div>
                
            </React.Fragment>
        )
    }
}

export default CollectList;