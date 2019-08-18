import React, {useState} from "react"

import ItemList from "./item-list"
import "./search-input.scss"

// add logic to make this only run on certain days of the week
if (process.env.NODE_ENV === 'development') {
    import("./conditional-no-mouse.scss")
    .then((data) => {
        // no-op
    })
}

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
    const [inputState, setInputState] = useState('')
    const [dirty, setIsDirty] = useState(false)

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
        setInputState(event.target.value)
    }
    const keyHandler = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            console.log("You'd be a lot cooler by supporting the Tab key");
        }
    }
    const filteredItems = items
        .filter(d => inputState === '' || !d.text.indexOf(inputState))
    
    return (
        <div className={`nav-container__searchContainer nav-container__searchContainer--isExpanded`}>
            <div className="nav-container__search">
                <div className={`search-top-container search-top-container--md box-view hide-title ${focused ? 'focused' : ''}`}>
                    <div className={`search-container type-text ${dirty ? 'has-value': ''}`}>
                        <div className="search-box">
                            <div className="icon"></div>
                            <div className="search-wrap">
                                <span className="s-w-placeholder">{text}</span>
                                <input name="empName" type="text" className="truncate search" autoComplete="off"
                                value={inputState} onFocus={focusHandler} onBlur={blurHandler} onKeyDown={keyHandler} onChange={changeHandler} />
                            </div>
                            <div className={`title ${focused ? 'active': ''}${dirty ? ' show' : ''}`}>
                                <span>Search for a friend</span>
                            </div>
                        </div>
                        <div className="select"></div>
                    </div>
                </div>
                <ItemList
                    items={filteredItems}
                    className={`search-comp nav-menu-dropdown ${focused ? 'showing ' : ''}`}
                />
            </div>
        </div>
    )
}

export default SearchInput
