import React,{Component} from 'react';
import './pro_buy_rule.scss';

class PRO_BUY_RULE extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }
    componentDidUpdate(){
        
    }

    render(){
        return(
            <React.Fragment>
                <div id="pro_buy_rule">
                   <h3>購買條款</h3>
                   <div className="text">
                        <p>當您使用本服務時，即視為已瞭解並同意接受本服務條款之所有內容及相關公告規定。如不同意本網站使用條款之全部或部分者，請勿填寫基本資料及完成後續購物流程或使用本網站服務。若您未滿二十歲，應請家長或監護人瞭解本服務條款之所有內容，並在徵得其同意後使用本網站服務。此外，本網站保留於任何時間點，不經通知隨時修改或暫時或永久停止繼續提供本服務的權利。本網站可能因廣告或其他合作促銷活動而包含其他網站連結，您點選該連結至其他網站，即不適用本網站使用條款及隱私權政策之規範。您需自行判斷各該網站相關條款對您的權益保障是否足夠，再決定是否使用該網站服務。
                            <br/><br/>
                            1. 依法令或受檢警調、司法機關或其他有權機關基於法定程序之要求;<br/>
                            2. 在緊急情況下為維護其他客戶或第三人之合法權益;<br/>
                            3. 為維護本網站的正常運作;<br/>
                            4. 為提供本公司相關服務產生的金流、物流或其他合作廠商之必要資訊;<br/>
                            5. 使用者有違反任何政府法令或本網站使用條款之情形;</p>
                   </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PRO_BUY_RULE;