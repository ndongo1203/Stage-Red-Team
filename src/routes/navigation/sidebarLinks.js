import { ACCEUIL_PATH, AUTHENTICATION_PATH, CHARTE_PATH, DISABLEDMENU_PATH, MAPS_PATH, PRODUCTS_PATH, SAMPLEPAGE_PATH, SERVICES_PATH, TABLE_PATH } from "./navigationPaths";
import { HiHome } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiHome, label: "Dashboard" },
    { path: PRODUCTS_PATH, icon: HiHome, label: "Components" },
    { path: SERVICES_PATH, icon: HiHome, label: "Form elements", },
    { path: TABLE_PATH, icon: HiHome, label: "Table" },
    { path: CHARTE_PATH, icon: HiHome, label: "Charte" },
    { path: MAPS_PATH, icon: HiHome, label: "Maps" },
    { path: AUTHENTICATION_PATH, icon: HiHome, label: "Authentication" },
    { path: SAMPLEPAGE_PATH, icon: HiHome, label: "Sample page" },
    { path: DISABLEDMENU_PATH, icon: HiHome, label: "Disables menu" },
]
