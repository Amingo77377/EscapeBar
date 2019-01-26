import React, { Component } from 'react';
import './pro_name.scss';
// import ProSlider from './pro_slider.js'


class PRO_NAME extends Component {
    constructor(props){
        super(props)
        this.state = {
            sites: [],
            siteDisplayNone: true,
            sitesOpen: false,
        }
    }
    
    getSiteName = () => {
        let str = `p.\`PRO_NAME\` = '${this.props.data.PRO_NAME}' && p.\`CID\` = ${this.props.data.CID} && p.\`PRO_SEQ\` `
        fetch('http://localhost:3000/eb/pro_list/products/site_name/' + str, {
            method:'GET',
            mode: "cors",
        })
        .then(res=>res.json())
        .then(sites => this.setState({
                sites
        }));
    }

    siteDisplayNone = () => {
        if(this.state.sites.length >= 2 && this.state.siteDisplayNone){
            this.setState({
                siteDisplayNone: false
            })
        }
    }

    openSites = () => {
        let {sitesOpen} = this.state
        sitesOpen = !sitesOpen
        this.setState({
            sitesOpen
        })
    }
    closeSites = () => {
        this.setState({
            sitesOpen: false
        })
    }
    selSite = (evt) => {
        let id = evt.target.dataset.id
        console.log("id:"+ id)
        fetch('http://localhost:3000/eb/pro_list/site/' + id, {
            method:'GET',
            mode: "cors",
        })
        .then(res=>res.json())
        .then(data => this.props.changeSite(data));
    }
    componentWillMount(){
        this.getSiteName() 
    }
    componentDidUpdate(){
        this.siteDisplayNone()
    }
    makeSiteOptions = () => {
        let sites = this.state.sites
        sites = sites.filter(site => {
            return (site.PRO_SEQ !== this.props.data.PRO_SEQ)
        })
        sites = sites.map(site =>
            <div className="option" data-id={site.PRO_SEQ}  onClick={this.selSite}>{site.site_name}</div>
        )
        return sites
    }
    render() {
        let siteDNone = this.state.siteDisplayNone ? "none" : ""
        let sitesClassName = this.state.sitesOpen ? "open" : ""
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
                        <div className={`sites ${sitesClassName} ${siteDNone}`} onClick={this.openSites} tabIndex={0} onBlur={this.closeSites}>
                            <div className="first">{this.props.data.site_name}</div>
                            {this.makeSiteOptions()}
                        </div>
                    </div>
                    <div className="img_info">
                        {/* <ProSlider id={this.props.data.PRO_SEQ}/> */}
                        <div className="info">
                            <div className="info_list time">遊戲時間：{this.props.data.GAME_TIME}分鐘</div>
                            <div className="info_list people">適合人數：{this.props.data.PEOPLE_MIN}~{this.props.data.PEOPLE_MAX}人</div>
                            <div className="info_list ophr">營業時間：{this.props.data.s_ophr}</div>
                            <div className="info_list tel">連絡電話：{this.props.data.s_tel}</div> 
                            <div className="info_list addr">遊戲地點：<div>{this.props.data.s_add}</div></div>  
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PRO_NAME;
