import React,{Component} from 'react';
import './date_picker.scss';


class DATE_PICKER extends Component{
    constructor(props){
        super(props)
        this.state = {
            year: "",
            month:"",
            calendar: ""
        }

    }
    componentDidUpdate(){
        // let month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
        // let month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
        // let now_date = new Date();
        // let now_year = now_date.getFullYear();
        // let now_month = now_date.getMonth();
        // let now_day = now_date.getDate();
        // this.setState({
        //     year: now_year,
        //     month: now_month
        // });
    }
    componentDidMount(){
        let month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
        let month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
        let now_date = new Date();
        let now_year = now_date.getFullYear();
        let now_month = now_date.getMonth();
        let w = new Date(now_year, now_month, 1);
        let weekday = w.getDay();
        let total_days = "";
        var calendar = "";
            for(let i=0; i<weekday; i++){
                calendar += "<li></li>";
            };
            if(now_year%4 == 0){
                 total_days = month_olympic[now_month];
            }else{
                 total_days = month_normal[now_month];
            }
            for(let j=1; j<=total_days; j++){
                calendar += `<li>${j}</li>`;
            }
        document.querySelector("#days").innerHTML = calendar;
        // console.log("now_week:" + now_week.getDay());
        console.log(weekday);
        
        this.setState({
            year: now_year,
            month: now_month+1,
            // calendar: calendar
        });
    }

    render(){
        return(
            <React.Fragment>
                <div id="date_picker">
                   <h5>{this.state.year}年{this.state.month}月</h5>
                   <ul>
                       <li className="text-red">日</li>
                       <li>一</li>
                       <li>二</li>
                       <li>三</li>
                       <li>四</li>
                       <li>五</li>
                       <li className="text-red">六</li>
                   </ul>
                   <div>
                       {/* <ul id="days">{this.state.calendar}</ul> */}
                       <ul id="days">{this.state.calendar}</ul>
                   </div>
                </div>
            </React.Fragment>
        )
    }


}

export default DATE_PICKER;