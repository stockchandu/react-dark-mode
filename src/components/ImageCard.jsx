import './imagecard.css'
import { themeContext } from "./context/ThemeContext"
import { useContext } from 'react'
export const ImageCard = ({ name, image, address, level, points }) => {
    const {dark } = useContext(themeContext);
    return (
        <>
            <div id="card-parent" style={dark == "white" ? {backgroundColor:"white" }: {backgroundColor:"#292E33"}}>
                <div id="profile-parent">
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>{name}</div>
                        <div>{address}</div>
                    </div>
                    <div>...</div>
                </div>

                <div></div>

                <div id="level-parent">
                    <div>{level}</div>
                    <div>{points}</div>
                </div>
            </div>
        </>
    )
}