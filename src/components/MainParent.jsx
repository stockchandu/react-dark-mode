import { Sidebar } from "./Sidebar"
import { ActiveUser } from "./ActiveUser"
import "./mainparent.css"
export const MainParent = () => {
    return (
        <>
            <div id="main-parent">
                <div><Sidebar /></div>
                <div><ActiveUser /></div>
            </div>
        </>
    )
}