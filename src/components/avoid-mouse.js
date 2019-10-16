import React, {useRef, useState} from "react"

export default ({children}) => {
    const wrapRef = useRef(null)
    const targetRef = useRef(null)

    const [styleState, setStyleState] = useState({
        left: '0',
        top: '0'
    })
    let posX = null
    let posY = null
    let moveFactor = 50

    const mouseMoveFunc = (event) => {
        console.log('movement:', event.movementX, event.movementY)
        if (Math.sign(event.movementX) === -1) {
            posX = (event.movementX * -1) - moveFactor
        } else {
            posX = (event.movementX * 1) + moveFactor
        }
        if (Math.sign(event.movementY) === -1) {
            posY = (event.movementY * -1) - moveFactor
        } else {
            posY = (event.movementY * 1) + moveFactor
        }
        console.log('posX, posY', posX, posY)
        setStyleState({
            left: posX,
            top: posY
        })
    }
    return (
        <div onMouseMove={mouseMoveFunc} ref={wrapRef}>
            <div
                ref={targetRef}
                style={{
                    position: 'absolute',
                    transition: 'all 0.25s easeInOut',
                    transformOrigin: 'left top',
                    transform: 'scale(1.5, 1.5)',
                    ...styleState
                }}>
                {children}
            </div>
        </div>
    )
}