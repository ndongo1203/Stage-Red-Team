import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaRegCalendarCheck } from "react-icons/fa";
import profile1 from "../../assets/images/avatar-1.jpg";

function UserCard() {
    const recentUsers = [
        {
            title: "Recent User", // Added title property here
            profile: profile1,
            username: "Isabella Christensen",
            description: "Lorem Ipsum is…",
            date: "2024-01-30",
            time: "15:45",
        },
        {
            profile: profile1,
            username: "AliceSmith",
            description: "Passionate developer",
            date: "2024-01-29",
            time: "12:30",
        },
        {
            profile: profile1,
            username: "AliceSmith",
            description: "Passionate developer",
            date: "2024-01-29",
            time: "12:30",
        },
        {
            profile: profile1,
            username: "AliceSmith",
            description: "Passionate developer",
            date: "2024-01-29",
            time: "12:30",
        },
    ];

    const upcomingEvent = {
        title: "Upcoming Event",
        progress: 34,
        competitors: 45,
        description: "You can participate in this event",
    };

    return (
        <div>
            <Row className="mb-4">
                {/* First Card */}
                <Col lg={8}>
                    {recentUsers.map((user, idx) => (
                        <Card key={idx} className="border-0">
                            <Card.Title className="p-3">{user.title}</Card.Title>
                            <Card.Body className="shadow-sm">
                                <Row className="align-items-center">
                                    <Col>
                                        <div className="">
                                            <img src={user.profile} alt="" style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "100%",
                                                objectFit: "cover",
                                            }}
                                            />
                                        </div>
                                    </Col>
                                    <Col className="me-5">
                                        <div className="d-flex">
                                            {user.username} <br />
                                            {user.description}
                                        </div>
                                    </Col>
                                    <Col>
                                        {user.date} &nbsp; {user.time}
                                    </Col>
                                    <Col>
                                        <Button variant="primary" size="sm" className="">
                                            Reject
                                        </Button>{" "}
                                        &nbsp;
                                        <Button variant="secondary" size="sm">
                                            Approve
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>

                <Col lg={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title>{upcomingEvent.title}</Card.Title>
                                <Button variant="primary">{upcomingEvent.progress}%</Button>
                            </div>
                            <p>{upcomingEvent.competitors} Competitors</p>
                            <p>{upcomingEvent.description}</p>
                            <FaRegCalendarCheck size={30} color="green" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default UserCard;
