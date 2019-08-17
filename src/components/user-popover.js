import React from "react"

import './user-popover.scss'

const UserPopover = ({ userImg = '' }) => {
    return (
        <div className="popup-wrapper" id="userPopoverWrapper">
            <div className="info" id="userPopover">
                <div className="user-avatar-wrapper" style={{height: '40px', width: '40px', borderRadius: '50%', backgroundImage: `url('${userImg}')`, backgroundSize: 'contain'}}></div>
            </div>
            <div id="userPopover-dropdown" className="userPopover-dropdown select-dropdownpopup-outer"></div>
        </div>
    )
}

export default UserPopover
