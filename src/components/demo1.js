import React from "react"
import SearchContainer from "./search-input"
import UserPopover from "./user-popover"

import activityIcon from "./icons/pto.png"
import certIcon from "./icons/payroll.png"
import taskIcon from "./icons/checklist.png"
import insuranceIcon from "./icons/insurance.png"
import anniversaryIcon from "./icons/anniversaryapp.png"

import "./demo1.scss"

const Demo1 = () => (
    <div className="demo1">
        <div className="header nav-container">
            <div className="inner-container">
                <h2>Dogtraining</h2>
                <div className="header-controls">
                    <SearchContainer />
                    <UserPopover />
                </div>
            </div>
        </div>
        <div className="main">
            <div className="nav">
                <div className="heading">Main Menu</div>
                <div className="list">
                    <div className="listitem directory">
                        Directory
                    </div>
                    <div className="listitem profile">
                        My Profile
                    </div>
                    <div className="listitem settings">
                        My Settings
                    </div>
                    <div className="listitem refer">
                        Refer a Friend
                    </div>
                    <div className="listitem support">
                        Support
                    </div>
                </div>
            </div>
            <div className="primary">
                <div className="heading">Personal Apps</div>
                <div className="app-icons">
                    <div className="app-iconbutton">
                        <div className="app-icon" style={{backgroundImage: `url(${activityIcon})`}}></div>
                        <div className="title">Activity Log</div>
                    </div>
                    <div className="app-iconbutton">
                        <div className="app-icon" style={{backgroundImage: `url(${certIcon})`}}></div>
                        <div className="title">Certifications</div>
                    </div>
                    <div className="app-iconbutton">
                        <div className="app-icon" style={{backgroundImage: `url(${taskIcon})`}}></div>
                        <div className="title">My Tasks</div>
                    </div>
                    <div className="app-iconbutton">
                        <div className="app-icon" style={{backgroundImage: `url(${insuranceIcon})`}}></div>
                        <div className="title">Insurance</div>
                    </div>
                    <div className="app-iconbutton">
                        <div className="app-icon" style={{backgroundImage: `url(${anniversaryIcon})`}}></div>
                        <div className="title">Anniversaries & Birthdays</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Demo1
