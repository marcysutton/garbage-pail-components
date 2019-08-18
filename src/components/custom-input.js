import React, {useRef, useEffect, useState} from "react"

import './custom-input.scss'

const CustomInput = ({ text = 'Search for a dog friend' }) => {
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
        console.log("You'd be a lot cooler if you supported the Tab key");
        if (event.key === 'Tab') {
            event.preventDefault()
        }
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
                <div className={`search-comp nav-menu-dropdown select-dropdownpopup-outer virtualise ${focused ? 'showing' : ''}`}>
                    <div className="select-dropdownpopup show">
                        <ul className="parent-ul">
                            <div tabIndex="0" style={{height: '280px', overflowY: 'auto', position: 'relative', outline: 'none', width: '100%'}}>
                                <div style={{top: '0px', position: 'absolute', height: '100%', width: '100%'}}>
                                    <div data-index="0" data-known-size="44">
                                        <li className="dropdownPopListRow active" id="option-1">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Rainier McCheddarton</div>
                                            </div>
                                        </li>
                                    </div>
                                    <div data-index="1" data-known-size="44">
                                        <li className="dropdownPopListRow" id="option-2">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Suzette</div>
                                            </div>
                                        </li>
                                    </div>
                                    <div data-index="2" data-known-size="44">
                                        <li className="dropdownPopListRow" id="option-3">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Henry Baker</div>
                                            </div>
                                        </li>
                                    </div>
                                    <div data-index="3" data-known-size="44">
                                        <li className="dropdownPopListRow" id="option-4">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Miss Mabel</div>
                                            </div>
                                        </li>
                                    </div>
                                    <div data-index="4" data-known-size="44">
                                        <li className="dropdownPopListRow" id="option-5">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Mochi</div>
                                            </div>
                                        </li>
                                    </div>
                                    <div data-index="5" data-known-size="44">
                                        <li className="dropdownPopListRow" id="option-6">
                                            <div className="nav-container__searchOption">
                                                <div className="nav-container__searchUserName">Moonli</div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomInput
