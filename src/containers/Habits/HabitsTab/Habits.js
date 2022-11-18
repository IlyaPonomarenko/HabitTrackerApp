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
        <div className="habits-calendar"></div>
    </div>
)
};
 export default Habits;