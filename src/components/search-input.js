import React, {useRef, useEffect, useState} from "react"

import ItemList from "./item-list"
import './search-input.scss'

const items = [
    {text: 'Rainier McCheddarton'},
    {text: 'Suzette'},
    {text: 'Henry Baker'},
    {text: 'Miss Mabel'},
    {text: 'Mochi'},
    {text: 'Moonli'}
]

const SearchInput = ({ text = 'Search for a dog friend' }) => {
    const [focused, setFocused] = useState(false)
    const [dirty, setIsDirty] = useState(false)
    const [expanded, setExpanded] = useState(true)

    const focusHandler = (event) => {
        if (!focused) {
            setFocused(true)
        }
    }
    const blurHandler = (event) => {
        if (focused) {
            setFocused(false)
        }
    }
    const changeHandler = (event) => {
        if (event.target.value.trim() !== '') {
            setIsDirty(true)
        } else if (event.target.value.trim() === '') {
            setIsDirty(false)
        }
    }
    const keyHandler = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            console.log("You'd be a lot cooler by supporting the Tab key");
        }
    }
    const itemSelectFunc = () => {

    }
    return (
        <div className={`nav-container__searchContainer nav-container__searchContainer--isExpanded`}>
            <div className="nav-container__search">
                <div className={`search-top-container search-top-container--md box-view hide-title ${focused ? 'focused' : ''}`}>
                    <div className={`search-container type-text ${dirty ? 'has-value': ''}`}>
                        <div className="search-box">
                            <div className="icon"></div>
                            <div className="search-wrap">
                                <span className="s-w-placeholder">{text}</span>
                                <input name="empName" type="text" className="truncate search" autoComplete="off" onFocus={focusHandler} onBlur={blurHandler} onKeyDown={keyHandler} onChange={changeHandler} />
                            </div>
                            <div className={`title ${focused ? 'active': ''}${dirty ? ' show' : ''}`}>
                                <span>Search for a friend</span>
                            </div>
                        </div>
                        <div className="select"></div>
                    </div>
                </div>
                <ItemList
                    items={items}
                    onSelect={itemSelectFunc}
                    className={`search-comp nav-menu-dropdown  virtualise ${focused ? 'showing ' : ''}`}
                />
            </div>
        </div>
    )
}

export default SearchInput
