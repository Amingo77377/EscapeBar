import React, { Component } from 'react';
import './pro_name.scss';
import ProSlider from './pro_slider.js'


class PRO_NAME extends Component {
    constructor(props){
        super(props)

    }

    render() {
        // console.log(this.props.data[0])
        return (
            <div id="pro_name">
                <h2>{this.props.data.PRO_NAME}</h2>
                <div>
                    <div className="jc_sb">
                        <ul>
                            <li>{this.props.data.f1}</li>
                            <li>{this.props.data.f2}</li>
                            <li>{this.props.data.f3}</li>
                        </ul>
                        <select>
                            <option value="taipei">台北館</option>
                            <option value="taichung">台中館</option>
                        </select>
                    </div>
                    <div className="img_info">
                        {/* <ProSlider id={this.props.data.PRO_SEQ}/> */}
                        <div className="info">
                            <div className="info_list">遊戲時間：{this.props.data.GAME_TIME}分鐘</div>
                            <div className="info_list">適合人數：{this.props.data.PEOPLE_MIN}~{this.props.data.PEOPLE_MAX}人</div>
                            <div className="info_list">營業時間：{this.props.data.s_ophr}</div>
                            <div className="info_list">連絡電話：{this.props.data.s_tel}</div> 
                            <div className="info_list">遊戲地點：{this.props.data.s_add}</div>  
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PRO_NAME;
