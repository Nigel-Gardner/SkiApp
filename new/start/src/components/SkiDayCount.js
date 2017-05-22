// import { Component } from 'react'
//declare specific features from React parts
//use stateless components when possible
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
//can specifically ask for icons you want
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import Mdmood from 'react-icons/lib/md/mood'

const percentToDecimal = (decimal) => {
  return((decimal * 100) + '%') //concate % symbol on end put in quotes
    // percent todecimal function, calcuate how far you ar reaching your goal
}

  //using above ti insert into calcGoalProgress
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }
    //use function for goal in goal span
    //methods do not need to be seperated by commas when using class syntax

export const SkiDayCount = ({total, powder, backcountry, goal}) =>   (
  //functions that display data (props) instead of using entire object you can replace props with powder, backcountry hiking, declare which keys you want to use
  //parentheses means we are returning a JSX element
      <div className='ski-day-count'>
        <div className="total-days">
          <span>{total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{powder}</span>
          <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {calcGoalProgress(
              total,
              goal)}
            </span>
        </div>
      </div>
      )



