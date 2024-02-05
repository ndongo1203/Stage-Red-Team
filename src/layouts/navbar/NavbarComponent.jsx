import ContenuNavbar from "components/Navbar/ContenuNavbar";
import React from "react";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        padding: "0 20px",
        height: 50,
        // backgroundColor: bgColor ? bgColor : "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
    <div>
      <ContenuNavbar />
    </div>
    </div>
  );
}

export default NavbarComponent;
