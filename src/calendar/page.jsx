import { Calendar } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { addHours } from "date-fns"

import Navbar from "./components/Navbar";
import Event from "./components/Event";
import localizer from "../utils/calendarLocalizer";
import { getMessagesEs } from "../utils/getMessages";
import { useState } from "react";


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

export default function CalendarPage() {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.table(event, start, end, isSelected)
  }

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  }

  const onSelect = (event) => {
    console.log({ selected: event })
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />

      <Calendar
        components={{
          event: Event
        }}
        culture="es"
        defaultView={lastView}
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        events={myEvents}
        localizer={localizer}
        messages={getMessagesEs()}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        startAccessor="start"
        style={{ height: 'calc(100vh - 65px)' }}
      />
    </>
  )
}