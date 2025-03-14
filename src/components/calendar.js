import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalendarRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [highlightedDays, setHighlightedDays] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    updateHighlightedDays(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    updateHighlightedDays(startDate, date);
  };

  const updateHighlightedDays = (start, end) => {
    if (start && end) {
      const days = [];
      let currentDate = new Date(start);
      while (currentDate <= end) {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      setHighlightedDays(days);
    } else {
      setHighlightedDays([]);
    }
  };

  const isHighlighted = (date) =>
    highlightedDays.some(
      (highlightedDate) =>
        highlightedDate.getDate() === date.getDate() &&
        highlightedDate.getMonth() === date.getMonth() &&
        highlightedDate.getFullYear() === date.getFullYear()
    );

  

  return (
    <Container className="p-4" style={{ backgroundColor: "white", color: "black" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex justify-content-around mb-4">
            <div>
              <label htmlFor="startDate">Start Date</label>
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={handleStartDateChange}
                placeholderText="DD/MM/YYYY"
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <DatePicker
                id="endDate"
                selected={endDate}
                onChange={handleEndDateChange}
                placeholderText="DD/MM/YYYY"
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </div>
          </div>

          <DatePicker
            inline
            startDate={startDate}
            endDate={endDate}
            highlightDates={highlightedDays}
            dayClassName={(date) => (isHighlighted(date) ? "highlighted-day" : null)}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="react-datepicker__navigation-button"
                >
                  {"<"}
                </button>
                <span style={{ cursor: "default" }}>
                  {date.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="react-datepicker__navigation-button"
                >
                  {">"}
                </button>
              </div>
            )}
          />

          <div className="text-center mt-3">
            <Button variant="warning">Export</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CalendarRangePicker;