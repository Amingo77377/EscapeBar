import React, { Component } from 'react';
import './pro_name.scss';


class PRO_NAME extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div id="pro_name">
                <h2>台北最新好評密室逃脫！壞主意工作室【腦細胞入侵】</h2>
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
                    <div>遊戲地點：台北市<button id="map_btn">map</button></div>
                    <div>遊戲時間：</div>
                    <div>適合人數：</div>
                    <div>連絡電話：</div>
                </div>
            </div>
        );
    }
}

export default PRO_NAME;
