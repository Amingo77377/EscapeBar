import React, {Component} from 'react';
import './charlie.scss';

class GameInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <h6>揪團遊戲資訊</h6>
                    
                <div className={"height" + " " + this.props.heightSet}>
                    <div className="d-flex">
                        <div className={this.props.imgBoxSet}>
                            <img className={this.props.imgSet} style={{display: this.props.heightSet === '' ? 'none' : 'block' }} src={`./img/game/${this.props.IMG_NAME}`}/>
                        </div>
                        <div className="mt-2">
                            <h2 style={{display: this.props.heightSet === '' ? 'none' : 'block' }}>{this.props.PRO_NAME}</h2>
                            <hr/>
                            <p style={{display: this.props.heightSet === '' ? 'none' : 'block' }}>遊戲建議人數：{this.props.PEOPLE_MIN}～{this.props.PEOPLE_MAX}人</p>
                            <p style={{display: this.props.heightSet === '' ? 'none' : 'block' }}>遊戲時間：{this.props.GAME_TIME}分鐘</p>
                            <p style={{display: this.props.heightSet === '' ? 'none' : 'block' }}>遊戲售價：{this.props.PRICE}元</p>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
            
        )
    }
}


export default GameInfo;