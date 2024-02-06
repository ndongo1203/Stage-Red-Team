import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function ContenuDashboard() {
  const cardData = [
    {
      title: "Daily Sales",
      icon: <BsArrowUp style={{ color: "green", fontSize: "25px" }} />,
      text: "$ 249.95",
      texte: "67%",
      now: 67,
    },
    {
      title: "Monthly Sales",
      icon: <BsArrowDown style={{ color: "red", fontSize: "25px" }} />,
      text: "$ 2,242.32",
      texte: "36%",
      now: 36,
    },
    {
      title: "Yearly Sales",
      icon: <BsArrowUp style={{ color: "green", fontSize: "25px" }} />,
      text: "$ 8,638.32",
      texte: "80%",
      now: 80,
    },
  ];

  return (
    <div>
      <Row xs={1} md={3} className="g-3">
        {cardData.map((data, idx) => (
          <Col key={idx}>
            <Card className="border-0 shadow-sm p-4">
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Card.Text>{data.icon}</Card.Text>
                    <Card.Text>{data.text}</Card.Text>
                </div>
                  <Card.Text>{data.texte}</Card.Text>
                </div>
                <ProgressBar now={data.now} label={`${data.now}%`} visuallyHidden style={{ height: "10px" }} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ContenuDashboard;
