import React,{Component} from 'react';
import './pro_map.scss';

class PRO_MAP extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        let lat = this.props.data.lat
        let lng = this.props.data.lng
        let addr = this.props.data.s_add
        // console.log(lat+" "+lng)
        return(
            <React.Fragment>
                <div id="pro_map">
                    <a href={`https://www.google.com/maps/place/${addr}`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=425x305&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk`} alt="pro_map" />
                    </a>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_MAP;