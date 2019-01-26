import React,{Component} from 'react';
import './pro_share.scss';
import Register from '../../kaicomponents/register/Register'; // kai
import { Link } from "react-router-dom";

var uid = null;

class PRO_SHARE extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            gid:this.props.id,
            collect:false
       
        }
        console.log(this.state.collect)

    }

     
    add = () => {
        if (localStorage.getItem('userId') != null){
            console.log(this.state.collect)
          
            var data ={
                gid:this.state.gid,
                uid:uid
            }
        
            // this.add(this.state.gid);
            fetch('http://localhost:3000/pro/collection', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
                .then(data => {
                    alert(data.message);                 
                })
           
                this.setState({
                    collect:true
                })
                
              } else {
                  alert("請先登入!")
                  
              }
        console.log(this.state.collect)
        }
        // var data ={
        //     gid:this.state.gid
        // }
        // console.log(this.props.id)
        // // this.add(this.state.gid);
        // fetch('http://localhost:3000/pro/collection', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // }).then(res => res.json())
        //     .then(data => {
        //         alert(data.message);
        //     })
      
        //   }
        componentDidUpdate(){
            if(localStorage.getItem('userId') != null){
                let user = localStorage.getItem('userId');
                let user2 = JSON.parse(user);
                uid = user2.uid
                console.log(uid)
            }
            // this.setState={
            //     uid,
              
            // }
           
        }
        


    render(){


        const add = () => {
        
            var data ={
                gid:this.state.gid
            }
            console.log(this.props.id)
            // this.add(this.state.gid);
            fetch('http://localhost:3000/pro/collection', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
                .then(data => {
                    alert(data.message);
                })
          
              }



        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">登入|註冊</Link>
                </li>
      
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
                <div id="pro_share">
                    <div id="favor">

                    {this.state.collect === false ? 

                        <div id="add_favor"  onClick={this.add}>
                            <img src={require("../../images/favor.png")} alt=""/>
                            <p>加入收藏</p>
                        </div>:
                        <div id="add_favor2">
                            {/* <img src={require("../../images/favor.png")} alt=""/> */}
                            <p>已收藏</p>
                        </div>

        }
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

                {/* {localStorage.getItem('userId') ? add : loginRegLink} */}
            </React.Fragment>
        )
    }

    componentDidMount = () =>{
        const uid = localStorage.getItem('userId');
        let user = localStorage.getItem('userId');
     
        let user2 = JSON.parse(user);
        // uid = user2.uid
      
        console.log(uid);
        this.setState({
          uid: uid
        });
  

      }

}

export default PRO_SHARE;