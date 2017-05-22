import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import Mdmood from 'react-icons/lib/md/mood'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
  //stateless function
  //days are going to be retunred are diaplying data inside row
  //will have a table row called date, resort....

  <table>

      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>Backcountry</th>
        <th>Did you have fun?</th>
      </tr>

        <tbody>
          {days.map((day, i) =>
            //map over all the days in that array
            //arguments are day and i, and return every item a ski day row
            <SkiDayRow key={i}
            //whats inside the skiday row
            //when redering  chilcren from an array provide a key vlaue
                        {...day}/>
                        //push all props in array in object use spread opperator
                        // resort={day.resort}
                        // date={day.date}
                        // powder={day.powder}
                        // backcountry={day.backcountry}
            )}
          </tbody>

    </table>

  )







