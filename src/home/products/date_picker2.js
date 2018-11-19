import React, {Component} from 'react'
import './date_picker2.scss'

class DatePicker2 extends Component {
  constructor (props) {
    super(props)
    let now = new Date()
    let currentYear = now.getFullYear()
    let currentMonth = now.getMonth()
    this.state = {
      currentYear,
      currentMonth
    }
  }
  makeCanlendar = (callback) => {
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
      currentWeekDays.push('')
    }
    for (let j = 1; j <= totalDays; j++) {
      if (currentWeekDays.length >= 7) {
        month.push(currentWeekDays)
        currentWeekDays = createWeekDays()
      }
      currentWeekDays.push(j)
    }
    while (currentWeekDays.length < 7) {
      currentWeekDays.push('')
    }
    month.push(currentWeekDays)
    let calendar = month.map((week, i) => (
      <tr className={'weeks'} key={`w${i}`}>
        {week.map((day, j) => (<td key={`${i}${j}`}>{day}</td>))}
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

  render () {
    let {
      currentYear,
      currentMonth
    } = this.state
    return (
      <React.Fragment>
        <div id='date_picker'>
          <div id="calendar_title">
            <i id="month_min" class="fas fa-angle-left" onClick={this.monthMinus1}></i>
            <h5>{currentYear}年{currentMonth + 1}月</h5>
            <i id="month_plus" class="fas fa-angle-right" onClick={this.monthPlus1}></i>
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
              {this.makeCanlendar()}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default DatePicker2