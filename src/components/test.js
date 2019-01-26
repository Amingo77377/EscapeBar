// 父子元件互傳資料的範例
// 來源：https://segmentfault.com/q/1010000007575332/a-1020000007726286

import React, {Component} from "react"

class Parent extends Component{
    state = {
      msg: 'start'
    };
    
    transferMsg(msg) {
      this.setState({
        msg
      });
    }
  
    render() {
      return <div>
          <p>child msg: {this.state.msg}</p>
          <Child_1 transferMsg = {m => this.transferMsg(m)} />
        </div>;
    }
  }
  
  class Child_1 extends Component{
    componentDidMount() {
      setTimeout(() => {
        this.props.transferMsg('endd')
      }, 1000);
    }
  
    render() {
      return <div>
        <p>child_1 component</p>
      </div>
    }
  }

export default Parent;