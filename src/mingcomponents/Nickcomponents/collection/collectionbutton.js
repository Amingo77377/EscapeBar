import React, { Component } from 'react';
import './collection'
import Collection from './collection';
import './button.scss'


class Button extends Component {
    constructor(props){
      
        
        
        super(props);   
        this.state = {
     data:[this.props.data],
      type: 'add'

        }
     console.log(this.props)
    }


    // add = (evt) => {
    //     this.props.add(this.state.data);
    //     evt.preventDefault();
    // }

    

    add = (e) => {
        console.log(this.state.data)
        let data = this.state.data
       
        fetch('http://localhost:3000/api/collection', {
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
    
   
    
  render() {

    return (
        <React.Fragment>
            <button className="button" onClick={this.add}>
        
            <span>&#10084;</span>
                <p>加入收藏</p>
                <div></div>
            </button>
        </React.Fragment>
    );
  }
}

export default Button;