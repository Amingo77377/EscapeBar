import React, { Component } from 'react';
import moment from 'moment';
import './Order.scss';

class OrderForm extends Component {
    constructor(props){
        super(props)
        this.state = { // 設定初始值
            email: {
                recipient: '',
                sender: 'escapebar@mail.com',
                subject: '逃脫吧！來自好友的溫馨通知',
                // text: '提醒您！記得於' + moment(this.props.mailInfo.DATE).format("YYYY/MM/DD") + '，參加" ' + this.props.mailInfo.PRO_NAME + ' "的遊戲'
                text: `提醒您！記得於 ${moment(this.props.mailInfo.DATE).format("YYYY/MM/DD")}，參加" ${this.props.mailInfo.PRO_NAME} "的遊戲！請到逃脫吧！查看更多內容！`
            }
        }
    }

    sendEmail = _ => {
        const { email } = this.state;
        fetch(`http://localhost:3000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
        .then(alert('寄送成功！'))
        .catch(err => console.error(err))
    }

    render(){

        const { email } = this.state;
        const spacer = {
          margin: 10
        }
        const textArea = {
          borderRadius: 4
        }

        return(
            <React.Fragment>

                <div className="App">
                    <div className="form-group" style={{ marginTop: 10 }} >
                        {/* <h2> Send Email </h2> */}
                  
                        <label> 請輸入好友 E-mail：</label>
                        <input type="email" className="form-control" value={email.recipient}
                            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                        <div style={spacer} />

                        {/* <label> 寄件者：(Sender) </label>
                        <input value={email.sender}
                            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                        <div style={spacer} /> */}

                        {/* <label> 主旨：(Subject) </label>
                        <input value={email.subject}
                            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        <div style={spacer} /> */}

                        {/* <label> 訊息內容：(Message) </label>
                        <textarea rows={3} value={email.text} style={textArea}
                            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                        <div style={spacer} /> */}
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.sendEmail}> 寄送通知 </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default OrderForm;