import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Dashboard from "./components/dashboard";
import CalendarRangePicker from "./components/calendar";

function App() {
  return (
    <div>
      <Dashboard />
      <div>
        <CalendarRangePicker />
      </div>
    </div>
  );
}

export default App;
