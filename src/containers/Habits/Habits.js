import React from "react";
import HabitGroup from "../HabitGroup/HabitGroup";
import "./Habits.scss";
const Habits = () => {
return (
    <div className="habits-frame">
        <div className="habits-tab">
            <div className="habits-tab__headline">
                <h1>All Habits</h1>
            </div>
            <HabitGroup></HabitGroup>
            <HabitGroup></HabitGroup>
        </div>
        <div className="habits-calendar">
            <div className="habits-calendar__weekdays">
                <div className="day">Mon</div>
                <div className="day">Thu</div>
                <div className="day">Wen</div>
                <div className="day">Tue</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
                <div className="day">Sun</div>
            </div>
        </div>
    </div>
)
};
 export default Habits;