import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";

import { MdVilla } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { VscVerified } from "react-icons/vsc";
import DashboardCard from "./dashboardcard";

const Dashboard = () => {
  const data = [
    { icon: <AiOutlineUserAdd size={40} />, title: "Total lead", value: 125 },
    { icon: <MdVilla size={40} />, title: "Available Villas", value: 26 },
    {
      icon: <FaHandshake size={40} />,
      title: "Total 4-star clients",
      value: 12,
    },
    {
      icon: <FaRupeeSign size={40} />,
      title: "Total pending amount",
      value: 5600000,
    },
    { icon: <VscVerified size={40} />, title: "Total tickets", value: 30 },
    {
      icon: <VscVerified size={40} />,
      title: "Total unsolved tickets",
      value: 12,
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {data.map((item, index) => (
          <Col md={4} className="mb-3" key={index}>
            <DashboardCard
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
