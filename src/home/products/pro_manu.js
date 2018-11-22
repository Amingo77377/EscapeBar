import React,{Component} from 'react';
import './pro_manu.scss';

class PRO_MANU extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    componentDidUpdate(){
        
    }

    render(){
        return(
            <React.Fragment>
                <div id="pro_manu">
                    <h3>關於</h3>
                    <h4>壞主意工作室</h4>
                    <div id="manu_frame">
                        <div id="manu_logo"></div>
                        <div id="manu_info">您想成為電影中的主角嗎？想親身經歷劇情帶來的刺激感嗎？那您千萬別錯過「壞主意工作室」！壞主意工作室由電影工作者、台大內科醫師，和清大生科碩士所創辦，遊戲體驗是「壞主意工作室」最重視的部分，因此，一開始「壞主意工作室」以環球影城為目標，希望能讓玩家完全徹底沉浸在密室遊戲中！

【腦細胞入侵】是「壞主意工作室」的第一個遊戲，遊戲謎題的類型十分多樣化，常見的鎖頭改以機關操作、多人合作、限時反應等形式，呈現讓玩家感到身歷其境、彷彿真的進入人體中冒險，不只考驗玩家腦力，和反應更考驗團隊成員之間的默契。還在等什麼，快和您的好友一起展開冒險吧！</div>
                        <ul>
                            <li><img src={require("../../images/clock.svg")}/><p>10:30 - 22:00</p></li>
                            <li><img src={require("../../images/tel.svg")}/><p>02-2255-5022</p></li>
                            <li><img src={require("../../images/map.svg")}/><p>新北市板橋區吳鳳路50巷75弄8號1樓</p></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_MANU;