"use client";
import { Calendar, dayjsLocalizer, View } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import "./style.css";
import { FaRegCalendarAlt } from "react-icons/fa";
const CalendarPage = () => {
  const [currentView, setCurrentView] = useState<View>("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const localizer = dayjsLocalizer(dayjs);

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };
  const handleView = (view: View) => {
    setCurrentView(view);
  };

  const events = [
    {
      start: dayjs("2024-04-30T12:30:00").toDate(),
      end: dayjs("2024-04-30T01:30:00").toDate(),
      title: "Biya...",
    },
    {
      start: dayjs("2024-05-03T16:30:00").toDate(),
      end: dayjs("2024-05-03T17:30:00").toDate(),
      title: "akd...",
    },
    {
      start: dayjs("2024-04-03T16:30:00").toDate(),
      end: dayjs("2024-04-03T16:30:00").toDate(),
      title: "biriyani...",
    },
  ];
  const components = {
    event: (props:any) => {
      // console.log(props);
      return <div  className="flex justify-center items-center gap-2">
        <FaRegCalendarAlt />
        {props.title}
      </div>;
    },
  };
  
  
  return (
    <div className="">
      <Calendar
        className="mx-auto  "
        style={{ height: "90vh", width: "75vw" }}
        localizer={localizer}
        date={currentDate}
        onNavigate={handleNavigate} 
        view={currentView}
        onView={handleView}
        views={["month", "week", "day"]}
        events={events}
        components={components}
        
      />
    </div>
  );
};

export default CalendarPage;
