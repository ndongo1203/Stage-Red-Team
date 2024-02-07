import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosSearch } from "react-icons/io";
import { FaBell, FaCog } from "react-icons/fa";
import "./DashboardStyle.css"

function ContenuNavbar() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex DrodownNavbar mx-5">
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <IoIosSearch className="ms-2 mt-1" style={{ fontSize: "1em" }} />
                </div>
                <div className="d-flex justify-content-end Nav-end">
                    <div className="d-flex justify-content-end align-items-end">
                        {/* Icône de notification */}
                        <div>
                            <NavDropdown
                                id="notification-dropdown"
                                title={<FaBell style={{ fontSize: "1em", color: "#888" }} />}
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Notification 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Notification 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Notification 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Voir toutes les notifications</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        {/* Icône de paramètre */}
                        <div className="text-end">
                            <NavDropdown
                                className="ms-4 justify-content-end"
                                id="settings-dropdown"
                                title={<FaCog style={{ fontSize: "1em", color: "#888" }} />}
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Paramètre 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Paramètre 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Paramètre 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Autres paramètres</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContenuNavbar;
