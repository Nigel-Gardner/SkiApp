import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import Mdmood from 'react-icons/lib/md/mood'

export const SkiDayRow = ({resort, date,
              powder, backcountry, type}) => (
//statless component
//returns JSX elements - props are from index.js. display on ski day row
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/
      {date.getFullYear()}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder) ? <SnowFlake/> : null}
    </td>
    <td>
      {(backcountry) ? <Terrain /> : null}
    </td>
    <td>
      {(type) ? <Mdmood /> : null}
    </td>
  </tr>
  )

//use an if else statment  uses ()
      // if powder is true, return snowflake, otherwise return null (nothing in cell)
