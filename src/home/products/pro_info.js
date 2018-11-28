import React, { Component } from 'react';
import './pro_info.scss';


class PRO_INFO extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
           <div id="pro_info">
                <h3>遊戲簡介</h3>
                <div id="pro_info_text">
                    <p>{this.props.info}</p>
                </div>
            </div>
        );
    }
}

export default PRO_INFO;