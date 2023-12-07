import React from 'react'
import { eachDayOfInterval, isSaturday, isSunday, format } from 'date-fns'
import './App.css'

let holidays = [
  { date: '2023-01-01', name: 'New Year' },
  { date: '2023-04-07', name: 'Good Friday' },
  { date: '2023-04-10', name: 'Easter Monday' },
  { date: '2023-05-22', name: 'Victoria Day' },
  { date: '2023-06-24', name: 'Saint-Jean-Baptiste Day' },
  { date: '2023-07-01', name: 'Canada Day' },
  { date: '2023-08-07', name: 'Civic Holiday' },
  { date: '2023-09-04', name: 'Labour Day' },
  { date: '2023-09-30', name: 'National Day for Truth and Reconciliation' },
  { date: '2023-10-09', name: 'Thanksgiving Day' },
  { date: '2023-11-11', name: 'Remembrance Day' },
  { date: '2023-12-25', name: 'Christmas Day' },
  { date: '2023-12-26', name: 'Boxing Day' },
]

function App() {
  let year = 2023
  let startDate = new Date(year, 0, 1)
  let endDate = new Date(year, 11, 31)
  let days = eachDayOfInterval({ start: startDate, end: endDate })

  return (
    <>
    <h1>My calendar</h1>

    <div className="calendar">
    {days.map((day) => {
        let isWeekend = isSaturday(day) || isSunday(day)
        let feriado  = (holiday) => format(day, 'yyyy-MM-dd') === holiday.date
        let isHoliday = holidays.some(feriado)
        let dayClasses = `day ${isWeekend ? 'weekend' : ''} ${isHoliday ? 'holiday' : ''}`

        return (
            <>
            <div key={format(day, 'yyyyMMdd')} className={dayClasses}>
              {format(day,'dd')}
            </div> 
            </>
        )
      })}
    </div>
    </>
  )
}

export default App
