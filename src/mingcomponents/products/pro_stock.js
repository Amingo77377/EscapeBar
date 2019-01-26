import React,{Component} from 'react';
import './pro_stock.scss';
import DATE_PICKER from './date_picker.js';
import DatePicker2 from './date_picker2.js';
import {NavLink} from 'react-router-dom';
import { throws } from 'assert';

class PRO_STOCK extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data,
            number: 0,
            stock: [],
            nowStocks: [],
            nowArray: [],
            nowDateSid: null,
            nowDate: "",
            timeZone: "",
            totalPriceShow : false,
            sites: [],
            siteDisplayNone: true,
            sitesOpen: false,
            alertStatus: false
        }
    }
    getStock = () => {
      let pid = this.state.data.PRO_SEQ
      if(this.state.stock.length === 0){
        fetch('http://localhost:3000/eb/pro_list/products/stock/' + pid ,{
          method:'GET',
          mode:'cors',
        })
        .then(res => res.json())
        .then(stock => this.setState({
          stock: stock,
        }))
      }
    //    console.log("stock:"+ this.state.stock)
    }
    selDate = (stocks) => {
        let nowArray = stocks.map(c => c =false)
        let nowDate = stocks.length ? stocks[0].DATE : ""
        this.setState({
            number: 0,
            nowStocks: stocks,
            nowArray,
            nowDateSid: null,
            nowDate,
            timeZone: "",
            totalPriceShow: false
 
        })
    }
    plusPeople = (evt) => {
        let {number} = this.state
        let index = evt.target.dataset.index
        let sid = evt.target.dataset.sid
        let timeZone = evt.target.dataset.tz
        let nowArray = this.state.nowArray.slice()
        if(!nowArray[index]){
            number -= 1
        }
        nowArray = nowArray.map(c => c = false)
        nowArray[index] = true
        this.setState({
            nowArray,
            totalPriceShow: true,
            nowDateSid: sid,
            timeZone
        }, () => {
            if(number <= 0){
                this.setState({
                    number: this.state.data.PEOPLE_MIN
                })
                // return
            }else if(number >= this.state.data.PEOPLE_MAX){
                this.setState({
                    number: this.state.data.PEOPLE_MAX
                })
            }else{
                number += 1
                this.setState({
                    number
                })
            }
        }) 
    }
    minusPeople = (evt) => {
        let {number} = this.state
        let index = evt.target.dataset.index
        let sid = evt.target.dataset.sid
        let timeZone = evt.target.dataset.tz
        let nowArray = this.state.nowArray.slice()
        if(!nowArray[index]){
            number += 1
        }
        nowArray = nowArray.map(c => c = false)
        nowArray[index] = true
        number -= 1
        this.setState({
            nowArray,
            totalPriceShow: true,
            nowDateSid: sid,
            timeZone
        }, () => {
            if(number <= this.state.data.PEOPLE_MIN){
                this.setState({
                    number: this.state.data.PEOPLE_MIN
                })
                return
            }
            this.setState({
                number
            })
        })
    }
    componentWillReceiveProps(){
        this.getSiteName() 
        
    }
    componentWillMount(){
        // this.getSiteName() 
    }
    componentDidUpdate(){
        this.siteDisplayNone()
    }
    checkRedirect = () => {
        if(this.state.number !== 0){
            return <NavLink className="buy-btn" to={{
                pathname: `/proList/products/reservation/${this.state.data.PRO_SEQ}`,
                state: {id : this.state}
                }}>立即預約</NavLink>
        }
        return <div className="buy-btn" onClick={this.warning}>立即預約</div>
    }
    warning = () => {
        this.setState({
            alertStatus: true
        })
    }
    alertClose = () => {
        this.setState({
            alertStatus: false
        })
    }
    //site 選擇場館 
    getSiteName = () => {
        let str = `p.\`PRO_NAME\` = '${this.props.data.PRO_NAME}' && p.\`CID\` = ${this.props.data.CID} && p.\`PRO_SEQ\` `
        console.log("str:"+ str)
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
        // .then(data )
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
    //site 以上選擇場館 
    render(){
        // console.log(this.state.nowDateSid)
        let price = this.state.number*this.state.data.PRICE
        let totalPriceShow = this.state.totalPriceShow ? "" : "none"
        let siteDNone = this.state.siteDisplayNone ? "none" : ""
        let sitesClassName = this.state.sitesOpen ? "open" : ""
        let siteName = this.state.siteDisplayNone ? this.props.data.s_name : this.props.data.site_name
        let alertClassName = this.state.alertStatus ? "" : "none"
        this.getStock()
        return(
            <React.Fragment>
                <div id="pro_stock" ref={this.props.refProp}>
                    <div id="pro_stock_place">
                        <h4>選擇預約場館</h4>
                        <div className={`one_site ${siteDNone}`}>{this.props.data.s_name}</div>
                        <div className={`sites ${sitesClassName} ${siteDNone}`} onClick={this.openSites} tabIndex={0} onBlur={this.closeSites}>
                            <div className="first">{this.props.data.site_name}</div>
                            {this.makeSiteOptions()}
                        </div>
                    </div>
                    <div id="pro_stock_date">
                        <h4>預約日期與時段</h4>
                        <DatePicker2 stock={this.state.stock} selDate={this.selDate}/>
                        <ul>
                            {this.state.nowStocks.map((stock, index) => 
                            <li key={index} className={this.state.nowArray[index] ? "checked" : ""}>
                                <div className={this.state.nowArray[index] ? "checked" : "unchecked"}></div>
                                <div>{stock.TIME_ZONE}</div>
                                <div className="number">
                                    <div data-index={index} data-tz={stock.TIME_ZONE} data-sid={stock.SID} className="minus-btn" onClick={this.minusPeople}></div>
                                    {this.state.nowArray[index] ? this.state.number : 0}人
                                    <div data-index={index} data-tz={stock.TIME_ZONE} data-sid={stock.SID} className="plus-btn" onClick={this.plusPeople}></div>
                                </div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div id="pro_stock_price" className={`dd-flex ${totalPriceShow}`}>
                    <div id="title">
                        <p>您選擇的遊戲為:</p>
                        <h4 id="">{this.state.data.PRO_NAME}</h4>
                        <h4 id="site_name">- {siteName}</h4>   
                    </div>
                    <div id="total_price">
                        <p>總價</p>
                        <h4>${price}</h4>
                    </div>    
                </div>
                <div id="pro_stock_buy" className="dd-flex">
                    <NavLink to={{pathname:'/startActivity'}} className="buy-btn">我要揪團</NavLink>
                    {this.checkRedirect()}
                </div>
                <div className={`alert ${alertClassName}`} onClick={this.alertClose}>
                    <div className="alert_frame">請先選擇日期與人數哦！</div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_STOCK;