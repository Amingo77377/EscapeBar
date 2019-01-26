import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { FacebookProvider, Page } from 'react-facebook';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/src/alice-carousel.scss";
import './charlie.scss';
import GameSlider from './GameSlider';
import Register from '../kaicomponents/register/Register'; // kai

class companyInfo extends Component {
    constructor(props){
        super(props)
        this.state ={
            selectOption: [],
            companyInfo: [],
            markersInfo: [],
            optionDefault: [],
            productsInfoAll: [],
            productsInfoThis: [],
            sid: '',
            track: 'false'
        }
        this.cid = props.match.params.cid;
        this.city_id = props.match.params.city_id;
    }

    trackHandler = () =>{
        const user = localStorage.getItem('userId');
        const user2 = JSON.parse(user);
        var uid = user2.uid;
        fetch('http://localhost:3000/pro/track',{
            method: 'POST',
            body: JSON.stringify({
                uid: uid,
                cid: this.cid,
                city_id: this.city_id
            }),
            headers: new Headers({'Content-Type':'application/json'})
        }).then(res=>res.json()) //(message:'追蹤工作室成功')
        .then(data=>{
            alert(data.message);
        });
        
        this.setState({
            track: 'true'
        });
    }

    selectedHandler = (evt) =>{
        this.setState({
            sid: evt.target.value
        },function(){
            this.getMarkersInfo();
            this.getProductsInfoAll();
            this.getProductsInfoThis();
        })
    }

    consoleHandler = () =>{
        console.log(this.state);
    }

    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-light login-style2" data-toggle="modal" data-target="#exampleModal">
                    登入|註冊
                    </button>
                    <br />
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <Register />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        )
        return(
            <React.Fragment>
                <div className="container bangSetMore">
                    <div className="row">
                        <div className="col-4">
                            <div className="c_logo_limit">
                                <img className="c_logo_big" src={`/img/company/default/${this.state.companyInfo.c_logo}`}/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row companyInfoTitle">
                                <h2 className="mr-4">{this.state.companyInfo.c_name}</h2>
                                <select id="siteSelect" className="siteSelect" value={this.state.sid} onChange={this.selectedHandler}>
                                    {this.state.selectOption.map(selectOption => 
                                        <option
                                            key={selectOption.sid}
                                            name={selectOption.sid}
                                            value={selectOption.sid}>
                                            {selectOption.site_name}
                                        </option>
                                    )}
                                </select>
                            </div>
                            
                            <div className="row mt-2">
                                <div className="col-6">
                                    <p>地址：{this.state.markersInfo.s_add}</p>
                                    <p style={{display: this.state.markersInfo.s_tel === '' ? 'none' : 'block' }}>電話：{this.state.markersInfo.s_tel}</p>
                                    <p>營業時間：{this.state.markersInfo.s_ophr}</p>
                                    <a href={this.state.companyInfo.c_website} style={{display: this.state.companyInfo.c_website === '' ? 'none' : 'block' }}><button className="btn btn-primary" id="companyBtn">點擊前往工作室網站</button></a>
                                    <button className={`btn btn-primary mt-2 ${this.state.track === 'true' ? 'track' : ''}`} id="companyBtn" onClick={this.trackHandler}>{this.state.track === 'false' ? '追蹤工作室' : '已追蹤'}</button>
                                    {/* {localStorage.getItem('userId') ? exampleModalCenter1 : loginRegLink} */}
                                </div>
                                <div className="col-6">
                                    <FacebookProvider appId="801282820265015">
                                        <Page href={this.state.companyInfo.c_facebook} hide_cta="true" height="300" tabs="timeline" />
                                    </FacebookProvider>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="c_intro mt-5">
                        <p>{this.state.companyInfo.c_intro}</p>
                    </div>
                    <div className="c_games mt-5">
                        <h5>工作室遊戲：</h5>
                    </div>
                        <GameSlider productsInfoAll={this.state.productsInfoAll} sid={this.state.sid}/>
                    <div className="mb-5">
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
    
    componentDidMount = () =>{
        this.getSelectOption();
        this.getCompanyInfo();
        const uid = localStorage.getItem('userId');
        this.setState({
            uid: uid
        });
    }

    getSelectOption = () =>{
        fetch("http://localhost:3000/company/selectOption/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                selectOption: data
            },function(){
                if(data.length === 1){
                    document.getElementById('siteSelect').style.display = "none";
                    this.getOptionDefault();
                }else{
                    this.getOptionDefault();
                }
            });
        })
    }

    getOptionDefault = () =>{
        fetch("http://localhost:3000/company/optionDefault/" + this.cid + "/" + this.city_id,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                optionDefault: data[0]
            },function(){
                if(this.state.optionDefault === ''){
                    return;
                }else{
                    this.setState({
                        sid: this.state.optionDefault.sid
                    },function(){
                        this.getMarkersInfo();
                        this.getProductsInfoAll();
                        this.getProductsInfoThis();
                    })  
                }
            });
        });
    }

    getCompanyInfo = () =>{
        fetch("http://localhost:3000/company/companyInfo/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                companyInfo: data[0]
            });
        });
    }

    getMarkersInfo = () =>{
        fetch("http://localhost:3000/company/markersInfo/" + this.state.sid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                markersInfo: data[0]
            });
        });
    }

    getProductsInfoAll = () =>{
        fetch("http://localhost:3000/company/productsInfoAll/" + this.cid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                productsInfoAll: data
            });
        });
    }

    getProductsInfoThis = () =>{
        fetch("http://localhost:3000/company/productsInfoThis/" + this.cid + "/" + this.state.sid,{
            method: 'GET',
        }).then(res=>res.json())
        .then(data => {
            this.setState({
                productsInfoThis: data
            },function(){
                var res = this.state.productsInfoAll.map(obj => this.state.productsInfoThis.find(o => o.PRO_NAME === obj.PRO_NAME) || obj);
                this.setState({
                    productsInfoAll: res
                });
            });
        });
    }
    
}

export default companyInfo;