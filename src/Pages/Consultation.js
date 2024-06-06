import "../Styles/consultation.css";
import AvailableHours from "../Components/hours";
import Patients from "../Components/Patients";
import React, { useMemo, useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import {
    add,
    addDays,
    addHours,
    eachDayOfInterval,
    eachMinuteOfInterval,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isAfter,
    isBefore,
    isEqual,
    isSameMonth,
    isThisMonth,
    isToday,
    parse,
    parseISO,
    set,
    startOfDay,
    startOfToday,
    startOfWeek,
    startOfYesterday,
} from "date-fns";

import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import {jwtDecode} from "jwt-decode";


export default function Home() {
    const [calendarTouched, setCalendarTouched] = useState(false);
    const [activeTab, setActiveTab] = useState("calendrier");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                console.log(decodedToken)
                setIsLoggedIn(true); // Set isLoggedIn to true if token exists
            }
        }
    }, []);

    const decodeToken = (token) => {
        try {
            // Decode the JWT token to get the payload
            // Return the decoded payload
            return jwtDecode(token);
        } catch (error) {
            // Handle decoding errors, if any
            console.error("Error decoding token:", error);
            return null;
        }};

    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let [selectedDay, setSelectedDay] = useState(today);
    let firstDayCurrentMonth = useMemo(() => parse(currentMonth, "MMM-yyyy", new Date()), [currentMonth]);
    let days = useMemo(() => eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
    }), [firstDayCurrentMonth]);
    const dayNames = [
        'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
    ];

    const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState([]);
    const [availableTimesInThisMonthForEachDay, setAvailableTimesInThisMonthForEachDay] = useState([]);

    const reservations = [
        addHours(startOfToday(), 5).toString(),
        addHours(startOfToday(), 6).toString(),
        addHours(startOfToday(), 7).toString(),
        addHours(startOfToday(), 8).toString(),
        addHours(startOfToday(), 9).toString(),
        addDays(new Date(addHours(startOfToday(), 4)), 3).toString(),
    ];

    function prevMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    const handleSaveAvailability = () => {
        const consultationData = {
            doctorId: 6,
            dateTime: selectedDay.toISOString(),
            patientId: null
        };

        axios.post(`http://localhost:8080/consultation/doctor/${consultationData.doctorId}`, consultationData)
            .then(response => {
                alert('Availability saved successfully!');
            })
            .catch(error => {
                console.error('Error saving availability:', error);
                alert('Failed to save availability: ' + error.message);
            });
    };

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    const freeTimes = useMemo(() => {
        const StartOfToday = startOfDay(selectedDay);
        const endOfToday = endOfDay(selectedDay);
        const startHour = set(StartOfToday, { hours: 8 });
        const endHour = set(endOfToday, { hours: 23, minutes: 30 });
        let hoursInDay = eachMinuteOfInterval(
            {
                start: startHour,
                end: endHour,
            },
            { step: 30 }
        );

        let freeTimes = hoursInDay.filter(
            (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
        );

        return freeTimes;
    }, [selectedDay]);

    useEffect(() => {
        let thisMonthTimesLength = [];
        let thisMonthTimesEachDay = [];
        days.forEach((day, dayIdx) => {
            const StartOfToday = startOfDay(day);
            const endOfToday = endOfDay(day);
            const startHour = set(StartOfToday, { hours: 8 });
            const endHour = set(endOfToday, { hours: 23, minutes: 30 });
            let hoursInDay = eachMinuteOfInterval(
                {
                    start: startHour,
                    end: endHour,
                },
                { step: 30 }
            );

            let freeTimes = hoursInDay.filter(
                (hour) =>
                    !reservations.includes(parseISO(hour.toISOString()).toString())
            );
            thisMonthTimesLength.push(freeTimes.length);
            thisMonthTimesEachDay.push(freeTimes);
        });

        setAvailableTimesInThisMonth(thisMonthTimesLength);
        setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay);
    }, [days]);

    return (<div>    <Navbar isLoggedIn={isLoggedIn}/>
            <div className="calendar-container">
            <div className="header">
                <span className="title">Select Your Availibilty</span><br /><br />
                <span className="subtitle">Appointments are between 08h30 to 23h30</span>
            </div>

            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === "calendrier" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setActiveTab("calendrier")}
                >
                    Calender
                </button>
                <button
                    className={`tab-button ${activeTab === "patients" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setActiveTab("patients")}
                >
                    Patients
                </button>
            </div>

            {activeTab === "calendrier" ? (
                <div className="calendar-content">
                    <div className="calendar-grid">
                        <button
                            type="button"
                            className="prev-month"
                            onClick={prevMonth}
                            disabled={isThisMonth(new Date(currentMonth))}
                        >
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>
                        <h2 className="month-heading">
                            {format(firstDayCurrentMonth, "MMMM yyyy")}
                        </h2>
                        <button
                            type="button"
                            className="next-month"
                            onClick={nextMonth}
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                    </div>

                    <div className="weekdays">
                        {dayNames &&
                            dayNames.map((day, i) => (
                                <div
                                    key={i}
                                    className={`weekday ${day === "Sun" || day === "Sat" ? "weekend" : ""}`}
                                >
                                    {day}
                                </div>
                            ))}
                    </div>

                    <div className="days">
                        {days &&
                            days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={`day ${dayIdx === 0 && colStartClasses[getDay(day) - 1]} ${
                                        (getDay(day) === 0 || getDay(day) === 6) ? "weekend" : ""
                                    }`}
                                >
                                    <button
                                        onClick={() => {
                                            setCalendarTouched(true);
                                            setSelectedDay(day);
                                        }}
                                        className={`day-button ${isEqual(day, selectedDay) ? "selected" : ""} ${
                                            isEqual(today, day) ? "today" : ""
                                        } ${isBefore(day, today) ? "disabled-day" : ""}`}
                                        disabled={isBefore(day, today)}
                                    >
                                        <time dateTime={format(day, "yyyy-MM-dd")}>
                                            {format(day, "d")}
                                        </time>
                                        {isEqual(day, selectedDay) && (
                                            <CheckCircle2 className="selected-icon" />
                                        )}
                                        {isAfter(day, startOfYesterday()) && (
                                            <div
                                                className={`available-times ${
                                                    isEqual(day, selectedDay) ? "visible" : ""
                                                }`}
                                            >
                                                <span>{availableTimesInThisMonth[dayIdx]}</span>
                                                <span>Available</span>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            ))}
                    </div>

                    {activeTab === "calendrier" && calendarTouched && (
                        <div className="reservation-time-selection">
                            <div className="reservation-time">
                                <label>
                                    Select your reservation time for{" "}
                                    <span className="selected-date">
                                        {format(selectedDay, "dd MMMM yyyy")}
                                    </span>
                                </label>
                                <AvailableHours freeTimes={freeTimes} />
                                <button
                                    className={`confirm-button ${calendarTouched ? "available" : "unavailable"}`}
                                    onClick={handleSaveAvailability}
                                >
                                    Confirm time
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Patients />
            )}
        </div>
            <Footer/>
        </div>

    );
}

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
];
