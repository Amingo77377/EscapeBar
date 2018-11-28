import React, { Component } from 'react';
import './pro_name.scss';


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
                            <li>宮廷劇情</li>
                            <li>絞盡腦汁</li>
                            <li>機關重重</li>
                        </ul>
                        <select>
                            <option value="taipei">台北館</option>
                            <option value="taichung">台中館</option>
                        </select>
                    </div>
                    <div>遊戲地點：{this.props.data.city_name}<button id="map_btn">map</button></div>
                    <div>遊戲時間：{this.props.data.GAME_TIME}分鐘</div>
                    <div>適合人數：{this.props.data.PEOPLE_MIN}~{this.props.data.PEOPLE_MAX}人</div>
                    <div>連絡電話：{this.props.data.s_tel}</div>
                </div>
            </div>
        );
    }
}

export default PRO_NAME;
