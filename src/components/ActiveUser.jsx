import { DarkMode } from "./DarkMode"
import { ActiveHeading } from "./ActiveHeading"
import { ImageCard } from "./ImageCard"
import nrupul from "./nrupul.png"
import sandhya from "./sandhya.png"
import elon from "./elon.png"
import './activeuser.css'

export const ActiveUser = () => {
    return (
        <>
            <div id="active-user-parent">
                <div>
                    <h1>My Dashboard</h1>
                    <div><DarkMode /></div>
                </div>

                <div>
                    <div><ActiveHeading /></div>
                    <div><ImageCard name="Nrupul Dev" image={nrupul} address="Silver city, Bangalore" level="Professional Level 15" points="4723 Points" /></div>
                    <div><ImageCard name="Sandhya " image={sandhya} address="Silver city, Bangalore" level="Professional Level 11" points="2329 Points" /></div>
                    <div><ImageCard name="Chandan Kumar" image={elon} address="Denmark, USA" level="Professional Level 6" points="1884 Points" /></div>
                </div>
            </div>
        </>
    )
}