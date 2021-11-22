import profile from './profile.png';
import tower from './tower.png';
import roadmap from './roadmap.png';
import bocket from './bocket.png';
import sms from './sms.png';
import notepad from './notepad.png';
import setting from './setting.png';
import plus from './plus.png';
import './sidebar.css'
export const Sidebar = () => {
    return (
        <>

            <div id="side-parent">
                <div><img src={profile} alt="" /></div>
                <div><img src={tower} alt="" /></div>
                <div></div>
                <div><img src={bocket} alt="" /></div>
                <div></div>
                <div><img src={sms} alt="" /></div>
                <div></div>
                <div><img src={notepad} alt="" /></div>
                <div></div>
                <div><img src={setting} alt="" /></div>
                <div></div>
                <div><img src={plus} alt="" /></div>
            </div>

        </>
    )
}