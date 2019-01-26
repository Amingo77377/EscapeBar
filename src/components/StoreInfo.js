import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.scss'
import { FaMapMarkerAlt, FaPhone, FaClock, FaTags } from 'react-icons/fa';


class StoreInfo extends Component {
    constructor(props){
        super(props);
        this.state = {

        } ;
    }

    componentDidUpdate() {
        // console.log('StoreInfo(Child_2) update');
    }

    render(){
        return(
            <React.Fragment>
                <div className="storeInfo">
                    <div className="storeTop">
                        <img className="storeLogo" src={"../img/company/default/"+this.props.storeLogo} alt={this.props.storeLogo}></img>
                        <h3 className="storeName">{this.props.storeName}</h3>
                    </div>
                    <hr/>
                    {/* <table>
                        <tr>
                            <td><FaMapMarkerAlt className="storeFa mx-1"/>地址</td>
                            <td>{this.props.storeAdd}</td>
                        </tr>
                        <tr>
                            <td><FaPhone className="storeFa mx-1"/>電話</td>
                            <td>{this.props.storeTel}</td>
                        </tr>
                        <tr>
                            <td><FaClock className="storeFa mx-1"/>營業時間</td>
                            <td>{this.props.storeOpHr}</td>
                        </tr>
                    </table>
                    <FaTags className="storeFa mx-1"/><span>該場館目前提供服務的遊戲如下：</span> */}
                    <div className="storeBottom">
                        <div className="d-flex flex-row align-items-center"><FaMapMarkerAlt className="storeFa mx-1"/><span>地址：{this.props.storeAdd}</span></div>
                        <div className="d-flex flex-row align-items-center"><FaPhone className="storeFa mx-1"/><span>電話：{this.props.storeTel}</span></div>
                        <div className="d-flex flex-row align-items-center"><FaClock className="storeFa mx-1"/><span>營業時間：{this.props.storeOpHr}</span></div>
                        <div className="d-flex flex-row align-items-center"><FaTags className="storeFa mx-1"/><span>該場館目前提供服務的遊戲如下：</span></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StoreInfo;