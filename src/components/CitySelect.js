import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.scss'

class CitySelect extends Component {
    constructor(props){
        super(props);
        this.state = {} ;
    }

    // 選擇篩選器之後回傳城市中心與比例尺
    handleChange =(e)=> {
        var city_id = e.target.value;
        var city_zoom ='';
        var city_center = {} ;
        // console.log(city_id);
        switch (city_id){
            // 現在所在位置
            // case "0":
            //     break;

            // 台北市
            case "1":
                city_zoom = '13';
                city_center ={lat: 25.0521, lng: 121.5440};
                break;
            
            // 新北市
            case "2":
                city_zoom = '13';
                city_center ={lat: 25.0154, lng: 121.4733};
                break;
            
            // 桃園市
            case "4":
                city_zoom = '12';
                city_center ={lat: 24.9894, lng: 121.3134};
                break;
            
            // 新竹市
            case "5":
                city_zoom = '14';
                city_center ={lat: 24.8008, lng: 120.9907};
                break;

            //台中市
            case "8":
                city_zoom = '12';
                city_center ={lat: 24.1649, lng: 120.6739};
                break;
            
            // 南投縣
            case "10":
                city_zoom = '11';
                city_center ={lat: 23.7178, lng: 120.7792};
                break;

            // 嘉義市
            case "12":
                city_zoom = '15';
                city_center ={lat: 23.4765, lng: 120.4549};
                break;
            
            // 台南市
            case "14":
                city_zoom = '15';
                city_center ={lat: 23.001, lng: 120.2255};
                break;
            
            // 高雄市
            case "15":
                city_zoom = '13';
                city_center ={lat: 22.6530, lng: 120.3032};
                break;

            // 宜蘭縣
            case "19":
                city_zoom = '13';
                city_center ={lat: 24.7154, lng: 121.7884};
                break;

            // 全台灣
            default:
                city_zoom = '8';
                city_center ={lat: 23.715, lng: 120.910};
        };
        // console.log(city_id, city_zoom, city_center)
        this.props.getCenterByCity({
            city_id: city_id,
            zoom: parseInt(city_zoom),
            center: city_center,
        })      
        // this.getStoresByCity(city_id);
    }
    
    // 篩選的同時讀出該縣市的場館，目前沒用到
    getStoresByCity = (city_id) => {
        fetch('http://localhost:3000/map/city/'+city_id)
        .then(res => res.json())
        .then(({data})=>{console.log(data)})
        // .then(res => this.setState({stores: res.data})) //僅顯示該縣市marker用，待研究
        .catch(err=> console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <select className="custom-select" onChange={this.handleChange}>
                    <option value="">選擇城市快速移動</option>
                    {/* <option value="0">現在位置</option> */}
                    <option value="1">台北市</option>
                    <option value="2">新北市</option>
                    <option value="4">桃園市</option>
                    <option value="5">新竹市</option>
                    <option value="8">台中市</option>
                    <option value="10">南投縣</option>
                    <option value="12">嘉義市</option>
                    <option value="14">台南市</option>
                    <option value="15">高雄市</option>
                    <option value="19">宜蘭縣</option>
                    <option value="">全台灣</option>
                </select>
            </React.Fragment>
        )
    }
}
export default CitySelect;