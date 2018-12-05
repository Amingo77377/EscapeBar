import React,{Component} from 'react';
import './pro_share.scss';

class PRO_SHARE extends Component{
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
                <div id="pro_share">
                    <div id="favor">
                        <div id="add_favor">
                            <img src={require("../../images/favor.png")} alt=""/>
                            <p>加入收藏</p>
                        </div>
                        <div id="add_record">
                            <img src={require("../../images/record.png")} alt=""/>
                            <p>紀錄成績</p>
                        </div>
                    </div>
                    <div id="share">
                        <p>分享社群</p>
                        <div>
                            <div id="fblogo"></div>
                            <div id="linelogo"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_SHARE;