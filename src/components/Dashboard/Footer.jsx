import React from "react";
import { Row, Col, Card } from "@themesberg/react-bootstrap";

function Footer() {
    return (
        <div>
            <footer className="footer section py-2">
                <Row>
                    <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                        <p className="mb-0 me-5 textFooter">
                            Copyright © 2019-2022
                        </p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <ul className="list-inline list-group-flush list-group-borderless text-center text-xl mb-0 list-unstyled">
                            <li className="list-inline-item px-0 px-sm-2 list-unstyled">
                                <Card.Link href="https://example.com/about" target="_blank" className="text-decoration-none text-secondary">
                                    About
                                </Card.Link>
                            </li>
                            <li className="list-inline-item px-0 px-sm-2">
                                <Card.Link href="https://example.com/themes" target="_blank" className="text-decoration-none text-secondary">
                                    Themes
                                </Card.Link>
                            </li>
                            <li className="list-inline-item px-0 px-sm-2">
                                <Card.Link href="https://example.com/blog" target="_blank" className="text-decoration-none text-secondary">
                                    Blog
                                </Card.Link>
                            </li>
                            <li className="list-inline-item px-0 px-sm-2">
                                <Card.Link href="https://example.com/contact" target="_blank" className="text-decoration-none text-secondary">
                                    Contact
                                </Card.Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer;
