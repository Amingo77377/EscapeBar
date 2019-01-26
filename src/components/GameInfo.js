import React, {Component} from "react"
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import './map.scss'
import { Input, Button, Label, Tooltip } from 'reactstrap';
import { FaStar, FaRegCommentDots, FaHashtag, FaDollarSign } from 'react-icons/fa';

// import gameImgTemp from '../img/城市尋寶_尖山陶寶_01.png'


class GameInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameImg: "城市尋寶_尖山陶寶_01.png",
            gameTitle: "遊戲名稱",
            gameRating: "5.0",
            gameRatingSamples: "999",
            gameFeature1: "遊戲特色",
            gameFeature2: "遊戲特色",
            gameFeature3: "遊戲特色",
            gamePriceMin: "499"
        } ;
    }
    render(){
        return(
            <React.Fragment>
                <div className="gameInfo">
                {
                    this.props.gamesInfo.map(game =>
                        <div className="gameRow" key={game.PRO_SEQ}>
                            <div className="gameLeft">
                                <img className="gameImg" src={"../img/game/"+game.IMG_NAME} alt={game.IMG_NAME}></img>
                            </div>
                            <div className="gameRight">
                                <h4 className="gameTitle">{game.PRO_NAME}</h4>
                                <div className="d-flex flex-row">
                                    <div className=""><FaStar className="gameRating"/><span> {game.rating}</span></div>
                                    <div className="ml-5"><FaRegCommentDots className="gameRatingSamples"/><span> {game.comments} 則評價</span></div>
                                </div>
                                <div className="gameFeature">
                                    <FaHashtag className="gameFeatureTag"/><span>{game.FF1}</span>
                                    <FaHashtag className="gameFeatureTag"/><span>{game.FF2}</span>
                                    <FaHashtag className="gameFeatureTag"/><span>{game.FF3}</span>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="flex-grow-1"><FaDollarSign/><span>{game.PRICE} 元起 </span></div>
                                    <div className=""><NavLink to={{pathname: `/proList/products/${game.PRO_SEQ}`, state: {id: game.PRO_SEQ}}}><Button className="" color="warning">查看更多</Button></NavLink></div>
                                </div>
                            </div>
                        </div>
                    )
                }
                    {/* <div className="gameRow">
                        <div className="gameLeft">
                            <img className="gameImg" src={gameImgTemp} alt={"gameImgTemp"}></img>
                        </div>
                        <div className="gameRight">
                            <h4 className="gameTitle">{this.state.gameTitle}</h4>
                            <div className="d-flex flex-row">
                                <div className="flex-grow-1"><FaStar className="gameRating"/><span>{this.state.gameRating}  </span></div>
                                <div className=""><FaRegCommentDots className="gameRatingSamples"/><span>  {this.state.gameRatingSamples} 則評價</span></div>
                            </div>
                            <div className="gameFeature">
                                <FaHashtag className="gameFeatureTag"/><span>{this.state.gameFeature1}</span>
                                <FaHashtag className="gameFeatureTag"/><span>{this.state.gameFeature2}</span>
                                <FaHashtag className="gameFeatureTag"/><span>{this.state.gameFeature3}</span>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="flex-grow-1"><FaDollarSign/><span>{this.state.gamePriceMin} 元起 </span></div>
                                <div className=""><Button className="" color="warning">查看更多</Button></div>
                            </div>
                        </div>
                    </div>             */}
                </div>
            </React.Fragment>
        )
    }
}

export default GameInfo;