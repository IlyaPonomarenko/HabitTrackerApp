/* Import styles */
import "./index.scss";
/* Import Dependencies */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Import Pages */
import App from "./App";
/* Will be changed to ./containers/Habits/Habits */
import Habit from "./containers/Habits/Habits";
import Tasks from "./containers/Tasks/Tasks";
import Error404 from "./components/Error404/Error404";

/* 
TODO: Create stylized 404 page
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tasks" element={<Tasks />} />
        <Route path="habits" element={<Habit />} />
      </Route>
      {/* TODO: Replace with actual 404 page */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
