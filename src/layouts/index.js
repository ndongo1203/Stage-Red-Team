import React, { useState, useRef } from "react";
import { useMemo } from "react";
import { FiAlignRight, FiAlignLeft } from "react-icons/fi";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowsDimention";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavbarPanel = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  transition: padding 0.3s;
  z-index: 2;
  padding: ${({ openedMenu, minViewPort }) =>
    openedMenu ? "0px 0px 0 0px" : minViewPort ? "0px 0px 0 0px" : "0px 0px 0 250px"};
`;

const BodyContainer = styled.div`
  display: flex;
`;

const SidebarPanel = styled.div`
  width: ${({ openedMenu }) => (!openedMenu ? "250px" : "60")};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0%;
  background-color: #fff;
  transition: width 0.3s;
  z-index: 4;
`;

const MenuController = styled.div`
  position: absolute;
  top: 0px;
  // width: 25px;
  // height: 25px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`;

const ContentOutlet = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(241, 241, 241, 0.624);
  transition: padding 0.3s;
  overflow-x: hidden;
  z-index: 1;
  padding: ${({ openedMenu }) => (openedMenu ? "70px 10px 0 0" : "70px 10px 0 250px")};

  @media (max-width: 900px) {
    padding-left: ${({ openedMenu }) => (openedMenu ? "70px" : "10px")}; /* Ajustement du padding en mode réactif */
  }
`;

const SpliTemplateScreen = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [minViewPort, setMinViewPort] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const sidebarRef = useRef(null);
  const [navbar] = children;

  const handleToggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const { width } = useWindowDimensions();
  // const handleResize = () => {
  //   setOpenedMenu((v) => !v);
  // };

  useMemo(() => {
    if (width <= 900) {
      setMinViewPort(true);
      setOpenedMenu(true);
    } else {
      setMinViewPort(false);
      setOpenedMenu(false);
    }
  }, [width]);

  return (
    <Container className="MenuDashboard">
      <NavbarPanel openedMenu={!sidebarVisible} minViewPort={minViewPort}>
        <MenuController id="IconeNavbar" onClick={handleToggleSidebar}>
          {openedMenu ? (
            <FiAlignRight className="menu-controller-icon col mx-4 fs-1 bg-transparent bg-danger" />
          ) : (
            <FiAlignLeft className="menu-controller-icon mx-4 fs-1 bg-transparent" />
          )}
        </MenuController>
        {navbar}
      </NavbarPanel>
      <BodyContainer>
        {sidebarVisible && (
          <SidebarPanel className="MySidebar" openedMenu={openedMenu} ref={sidebarRef}>
            {children[1]}
          </SidebarPanel>
        )}
        <ContentOutlet openedMenu={!sidebarVisible}>{children[2]}</ContentOutlet>
      </BodyContainer>
    </Container>
  );
};

export default SpliTemplateScreen;