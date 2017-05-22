import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React


render(
  <SkiDayList days={
    [
      {
        resort: "Tahoe",
        date: new Date("1/11/2016"),
        powder: true,
        backcountry: false,
        type: true
      },
      {
        resort: "Snowbird",
        date: new Date("3/28/2016"),
        powder: true,
        backcountry: true

      },
      {
        resort: "Vail",
        date: new Date("4/2/2016"),
        powder: false,
        backcountry: true
      },
      {
        resort: "Killington",
        date: new Date("4/15/2016"),
        powder: true,
        backcountry: true
      }
    ]
  }
  />,

    document.getElementById('react-container')
)
