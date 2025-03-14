import React from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card className="shadow-lg p-4 bg-warning text-white rounded-4">
      <Card.Body className="d-flex align-items-center">
        <div className="me-4 flex-shrink-0">{icon}</div>
        <div>
          <Card.Title className="fw-semibold mb-2">{title}</Card.Title>
          <Card.Text className="fs-3 fw-bold">
            <CountUp end={value} duration={3} separator="," />
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
