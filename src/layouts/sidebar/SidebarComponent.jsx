import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";
import Logo from "../../assets/images/logo-thumb-removebg-preview.png"

const SidebarComponent = ({ bgColor, activeLinkColor, activeLinkBgColor, colorOnHover, linkColor }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor
  })
  return (
    <div style={{ backgroundColor: "#3f4d67",
    color: "#a9b7d0", height: "100vh" }}>
      <div
        style={{
          backgroundColor: bgColor ? bgColor : "#3f4d67",
          height: "100%",
          padding: "10px",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p><img src={Logo} alt="logo" className="img-fluid" /></p>
        <h3>Datta Able</h3>
      </div>
        <ResourceDataMap
          resourceData={links}
          resourceItem={ClonedSidebarItem}
          resourceName="linkItem"
        />
      </div>
    </div>
  );
};

export default SidebarComponent;
