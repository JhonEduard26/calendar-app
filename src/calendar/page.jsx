import { Calendar } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { addHours } from "date-fns"

import Navbar from "./components/Navbar";
import localizer from "../utils/calendarLocalizer";
import { getMessagesEs } from "../utils/getMessages";


const myEvents = [
  {
    title: 'Mi evento',
    start: new Date(),
    end: addHours(new Date(), 1),
    notes: 'una nota cualquiera',
    user: {
      _id: '123',
      name: 'Jhon'
    }
  }
]

export default function CalendarPage () {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.table(event, start, end, isSelected)
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 65px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
    />
    </>
  )
}