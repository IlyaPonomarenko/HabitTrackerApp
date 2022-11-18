import React from "react";
import HabitGroupEntry from "../HabitGroupEntry/HabitGroupEntry";
import "./HabitGroup.scss";
const HabitGroup = () => {
return (
    <div>
        <div className="habitGroup-title">
            <h1>Habit group title</h1>
        </div>
            <div className="habitGroup-list">
                <HabitGroupEntry></HabitGroupEntry>
                <HabitGroupEntry></HabitGroupEntry>
                <HabitGroupEntry></HabitGroupEntry>
                <HabitGroupEntry></HabitGroupEntry>
            </div>
    </div>
)
};
 export default HabitGroup;