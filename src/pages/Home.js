import React from "react";
import ReminderTable from "./ReminderTable";
import ReminderForm_1 from "./ReminderForm_1";
import ReminderDirector from "./ReminderDirector";
import ReminderSetting from "./ReminderSetting";
import { Route,Routes } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={  <ReminderTable/>}/>
        <Route path="/reminder_form_1" element={<ReminderForm_1/>}/>
        <Route path="/reminder_director" element={<ReminderDirector/>}/>
        <Route path="/reminder_setting" element={<ReminderSetting/>}/>
      </Routes>
    </div>
  );
}
