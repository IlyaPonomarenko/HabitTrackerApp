import React from "react";
import HabitGroupEntry from "../HabitGroupEntry/HabitGroupEntry";
import "./HabitGroup.scss";
const HabitGroup = (props) => {
return (
    <div>
        <div className="habitGroup-title">
            <h3 className="h1-habit">Habit group title</h3>
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