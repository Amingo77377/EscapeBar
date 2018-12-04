import React, {Component} from 'react'
import './date_picker2.scss'

class DatePicker2 extends Component {
  constructor (props) {
    super(props)
    let now = new Date()
    let currentYear = now.getFullYear()
    let currentMonth = now.getMonth()
    // let dayArray = []
    this.state = {
      currentYear,
      currentMonth,
      dayArray: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    }
  }
  makeCalendar = (callback) => {
    let tdClassName 
    let monthData = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let {
      currentYear,
      currentMonth
    } = this.state
    let w = new Date(currentYear, currentMonth, 1)
    let weekday = w.getDay()
    let totalDays = 0
    let createWeekDays = () => {
      return []
    }
    // createWeekDays = () => []
    let currentWeekDays = createWeekDays()
    let month = []
    
    if (currentYear % 4 === 0) {
      monthData[1] = 29
    }
    totalDays = monthData[currentMonth]
    for (let i = 0; i < weekday; i++) {
      currentWeekDays.push({day:"", className:""})
    }
    for (let j = 1; j <= totalDays; j++) {
      if (currentWeekDays.length >= 7) {
        month.push(currentWeekDays)
        currentWeekDays = createWeekDays()
      }
      let gamedate = this.props.stock.find(game => {
      //  console.log(`bbb:${new Date(game.DATE).getFullYear()}${new Date(game.DATE).getMonth()}${new Date(game.DATE).getDate()}`)
        return (`${new Date(game.DATE).getFullYear()}${new Date(game.DATE).getMonth()}${new Date(game.DATE).getDate()}` === `${currentYear}${currentMonth}${j}` && game.STATUS === 'Y')
      })
      let cn ;
      if(!gamedate){
        cn = "no";
        currentWeekDays.push({day:j, className:cn})
      }else{
        // console.log("gamedate:"+gamedate)
        cn = "yes";
        currentWeekDays.push({day:j, className:cn})
      }
    }
    while (currentWeekDays.length < 7) {
      currentWeekDays.push({day:"", className:""})
    }
    month.push(currentWeekDays)
    let calendar = month.map((week, i) => (
      <tr className={'weeks'} key={`w${i}`}>
        {week.map((day, index) => 
          (<td onClick={this.selDate} data-value={day.day} className={day.className+ " " + (this.state.dayArray[day.day]?"current":"")} key={`${i}${index}`}>{day.day}</td>))}
      </tr>))
    return (calendar)
  }
 
  monthMinus1 = () => {
    let {
      currentYear,
      currentMonth
    } = this.state;
    currentMonth -= 1;
    if(currentMonth === -1){
      currentMonth = 11;
      currentYear -= 1;
    }
    this.setState({
      currentYear: currentYear,
      currentMonth: currentMonth
    })
  }

  monthPlus1 = () => {
    let {
      currentYear,
      currentMonth
    } = this.state;
    currentMonth += 1;
    if(currentMonth === 12){
      currentMonth = 0;
      currentYear += 1;
    }
    this.setState({
      currentYear: currentYear,
      currentMonth: currentMonth
    })
  }
  selDate = (evt) => {
    let {
      currentYear,
      currentMonth,
    } = this.state
    let day = evt.target.dataset.value
    let dayArray = this.state.dayArray.slice()
    dayArray = dayArray.map(c => c = false)
    dayArray[day] = true
    this.setState({
      dayArray
    })
    let stocks = this.props.stock.filter(date => {
      return (`${new Date(date.DATE).getFullYear()}${new Date(date.DATE).getMonth()}${new Date(date.DATE).getDate()}` === `${currentYear}${currentMonth}${day}` && date.STATUS === 'Y')
    })
    // if(stocks.length === 0){
    //   return
    // }
    this.props.selDate(stocks)
  }
  render () {
    // console.log("dayArray:"+this.state.dayArray)
    // let tdClassName = this.state.dayArray[] ? "current" : ""
    let {
      currentYear,
      currentMonth
    } = this.state
    return (
      <React.Fragment>
        <div id='date_picker'>
          <div id="calendar_title">
            <i id="month_min" className="fas fa-angle-left" onClick={this.monthMinus1}></i>
            <h5>{currentYear}年{currentMonth + 1}月</h5>
            <i id="month_plus" className="fas fa-angle-right" onClick={this.monthPlus1}></i>
          </div>
          <table>
            <thead>
              <tr>
                <th className='text-red'>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th className='text-red'>六</th>
              </tr>
            </thead>
            <tbody>
              {this.makeCalendar()}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default DatePicker2
