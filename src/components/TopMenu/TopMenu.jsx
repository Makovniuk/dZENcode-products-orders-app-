import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./TopMenu.css";

const TopMenu = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar fixed="top" bg="light" className="topMenu">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="logo">
          INVENTORI
        </Navbar.Brand>
        <Form className="d-flex flex-grow-1 justify-content-center mx-3">
          <Form.Control
            type="text"
            placeholder="Поиск..."
            className="me-2 w-50"
          />
          <Button type="submit">Submit</Button>
        </Form>
        <div className="date-time text-end">
          <div className="fw-bold">
            {time.toLocaleDateString("ru-RU", { weekday: "long" }).charAt(0).toUpperCase() +
            time.toLocaleDateString("ru-RU", { weekday: "long" }).slice(1)}
          </div>
          <div className="text-muted small">
            {time.toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            🕒 {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
