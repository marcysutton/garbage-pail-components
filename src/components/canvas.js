import React, {useEffect, useRef} from 'react'

const CanvasDemo = ({showFallback = 'false'}) => {
    const demoText = `Hello World`
    const canvasRef = useRef(null)

    useEffect(() => {
        var ctx = canvasRef.current.getContext(`2d`)
        ctx.font = `80px WindsorD-Bol`
        ctx.fillStyle = `red`
        ctx.textAlign = `center`
        ctx.fillText(demoText, canvasRef.current.width / 2, canvasRef.current.height/2)
    })
    return (
        <canvas ref={canvasRef} width='1000' height='400'>
            {
                showFallback === 'true' ? <div>{demoText}</div> : null
            }
        </canvas>
    )
}

export default CanvasDemo