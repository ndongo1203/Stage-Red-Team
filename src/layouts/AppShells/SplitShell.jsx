import SpliTemplateScreen from "layouts"
import NavbarComponent from "layouts/navbar/NavbarComponent"
import SidebarComponent from "layouts/sidebar/SidebarComponent"
import React from "react"
import { Outlet } from "react-router-dom"

/*
|--------------------------------------------------------------------------
| Dashboard avec un sidebar
|--------------------------------------------------------------------------
|
| Ce layout contient le sidebar ainsi que le navbar de l'application
| Il est appeler dans routes/navigation/privte.js en tant que children de RequireAuth
|
*/
const SplitShell = () => {
    return (
        <SpliTemplateScreen>
            <NavbarComponent />
            <SidebarComponent
                bgColor={"#3f4d67"}
                activeLinkColor={"#fff"}
                activeLinkBgColor="rgba(0,5,10,.5)"
                linkColor="#a9b7d0"
                colorOnHover={"#a9b7d0"}
            />
            <Outlet />
        </SpliTemplateScreen>
    )
}

export default SplitShell