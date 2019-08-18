import React, {useState, useRef, useEffect} from "react"

import ItemList from "./item-list"
import userImg from '../images/rainier-headshot.jpg'

import './user-popover.scss'

const items = [
    {
        text: 'Michelle Peters',
        textClass: 'category'
    },
    {
        itemClass: 'link',
        text: 'My Profile',
        textClass: 'label'
    },
    {
        itemClass: 'link',
        text: 'Account Settings',
        textClass: 'label'
    },
    {
        itemClass: 'link',
        text: 'Sign Out',
        textClass: 'label'
    },
    {
        text: 'Goof city',
        textClass: 'category'
    },
    {
        itemClass: 'link',
        text: 'Employee Account',
        textClass: 'label'
    },
]
const UserPopover = () => {
    const [expanded, setExpanded] = useState(false)
    const popoverRef = useRef(null)

    const clickHandler = () => {
        if (!expanded) {
            setExpanded(true)
        } else {
            setExpanded(false)
        }
    }
    const windowClickHandler = (event) => {
        if (popoverRef.current.contains(event.target))   {
            return
        }
        setExpanded(false)
    }
    useEffect(() => {
        if (expanded) {
            document.body.addEventListener('click', windowClickHandler)
        } else {
            document.body.removeEventListener('click', windowClickHandler)
        }
        return function cleanup() {
            document.body.removeEventListener('click', windowClickHandler)
        }
    }, [expanded])
    return (
        <div className="popup-wrapper" ref={popoverRef}>
            <div className="info" id="userPopover" onClick={clickHandler} tabIndex="0">
                <div className="user-avatar-wrapper" style={{height: '1.25em', width: '1.25em', borderRadius: '50%', backgroundImage: `url('${userImg}')`, backgroundSize: 'contain'}}></div>
            </div>
            <div className="userPopover-dropdown">
                <ItemList
                    items={items}
                    className={`${expanded ? 'showing ' : ''}`}
                />
            </div>
        </div>
    )
}

export default UserPopover
