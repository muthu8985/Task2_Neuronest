import React from "react";
import { Card } from "react-bootstrap";
import { useEffect,useState } from "react";

const DashboardCard = ({ title, value, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const step = Math.ceil(value / 50); 
    const interval = setInterval(() => {
      currentCount += step;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    },10); 
    return () => clearInterval(interval);
  }, [value]);
  return (
    <Card className="shadow-lg p-4 bg-warning text-white rounded-4">
      <Card.Body className="d-flex align-items-center">
        <div className="me-4 flex-shrink-0">{icon}</div>
        <div>
          <Card.Title className="fw-semibold mb-2">{title}</Card.Title>
          <Card.Text className="fs-3 fw-bold">
            {count.toLocaleString()}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
