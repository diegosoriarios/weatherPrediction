import React, { useState } from 'react'
import DatePicker from 'react-mobile-datepicker'

function App() {
  const [cur_time, setTime] = useState(new Date())
  const [isOpen, setIsOpen ] = useState(false)
  const [timePicked, setTimePicked] = useState(false)

  const renderDate = () => {
    if (timePicked) {
      return (
        <p>
        {cur_time.getDate()} -
        {cur_time.getMonth() + 1}-
        {cur_time.getFullYear()}
      </p>
      )
    }
  }

  const getWeather = () => {
    let year = cur_time.getFullYear()
    let month = cur_time.getMonth() + 1
    let day = cur_time.getDate()
    if(month < 10) {
      month = `0${month}`
    }

    fetch(`http://127.0.0.1:5000/${day}${month}${year}`)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <div className="App">
      <a className="select-btn"
        onClick={() => setIsOpen(true)}>
        select time
      </a>
      <br/>
      
      {//renderDate()
      getWeather()}


      <DatePicker
        value={cur_time}
        isOpen={isOpen}
        onSelect={(time) => {setTime(time); setIsOpen(false); setTimePicked(true);}}
        onCancel={() => setIsOpen(false)}
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </div>
  )
}

export default App