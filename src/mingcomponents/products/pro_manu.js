import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
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
        let img = this.props.data.c_logo ? this.props.data.c_logo : "badideas.jpg"
        return(
            <React.Fragment>
                <div id="pro_manu">
                    <h3>關於</h3>
                    <h4>{this.props.data.c_name}</h4>
                    <div id="manu_frame">
                        <NavLink className="pro_card" to={{pathname: `/companyList/companyInfo/${this.props.data.CID}/${this.props.data.city_id}`,state: {sid: this.props.data.sid}}}><div id="manu_logo" style={{ backgroundImage: `url(${require(`../../images/c_img/${img}`)})`}}></div></NavLink>
                        <div id="manu_info">{this.props.data.c_intro}</div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_MANU;