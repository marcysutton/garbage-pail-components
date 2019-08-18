import React from "react"

import "./item-list.scss"

const ItemList = ({
    className = '',
    items = [{itemClass: '', text: '', textClass: ''}],
    activeIndex = 0,
    onSelectFunc
}) => {
    return (
        <div className={`${className}select-dropdownpopup-outer`}>
            <div className="select-dropdownpopup">
                <ul className="parent-ul">
                    {items.map((item, index) => {
                        return <li key={`item-${index}`}
                            className={`dropdownPopListRow ${activeIndex === index ? 'active' : ''}${item.itemClass || ''}`}
                            id={`option-${index}`}>
                            <div className="nav-container__searchOption">
                                <div className="nav-container__searchUserName">
                                    <p className={item.textClass}>{item.text}</p>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ItemList
