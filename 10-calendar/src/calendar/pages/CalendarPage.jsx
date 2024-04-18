import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";

import { Calendar } from "react-big-calendar";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";



export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();

  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };

  const onDoubleClick = (event) => {
    openDateModal();
    setActiveEvent(event);
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <Navbar></Navbar>
      <Calendar
        defaultView={lastView}
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew/>
      <FabDelete/>
    </>
  );
};
