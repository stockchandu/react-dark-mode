import { themeContext } from "./context/ThemeContext"
import { useContext } from 'react'
export const DarkMode = () => {
    const { handleDarkMode, dark } = useContext(themeContext);
    return (
        <>
            <div className="container">
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={() => { handleDarkMode() }} />
                    <label className="custom-control-label" for="customSwitch1">{dark === "white" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
                </div>
            </div>
        </>
    )
}