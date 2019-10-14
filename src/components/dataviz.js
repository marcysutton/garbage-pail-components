import React, {useEffect, useRef, useState} from 'react'
import * as d3 from "d3"
import DataVizCommon from "./dataviz-common"

// source: https://bocoup.com/blog/smoothly-animate-thousands-of-points-with-html5-canvas-and-d3

function DataViz () {
    let currLayout = 0
    let [announcement, setAnnouncement] = useState('')
    let timer = null

    const width = 600
    const height = 600
    const numPoints = 7000
    const pointWidth = 4
    const pointMargin = 3
    const duration = 1500
    const ease = d3.easeCubic
    const points = DataVizCommon.createPoints(numPoints, pointWidth, width, height)

    let screenScale = 1
    let canvasRef = useRef(null)
    let liveRegionRef = useRef(null)

    const toGrid = function (t) {
        setAnnouncement('Grid Layout')

        return DataVizCommon.gridLayout(
            t, pointWidth + pointMargin, width
        )
    }
    const toSine = function (t) {
        setAnnouncement('Sine Layout')
        return DataVizCommon.sineLayout(
            t, pointWidth + pointMargin, width, height
        )
    }
    const toSpiral = function (t) {
        setAnnouncement('Spiral Layout')
        return DataVizCommon.spiralLayout(
            t, pointWidth + pointMargin, width, height
        )
    }
    const toPhyllotaxis = function (t) {
        setAnnouncement('Phyllotaxiss Layout')
        return DataVizCommon.phyllotaxisLayout(
            t, pointWidth + pointMargin, width / 2, height / 2
        )
    }
    const layouts = [toSine, toPhyllotaxis, toSpiral, toPhyllotaxis, toGrid]

    function draw () {
        var t = canvasRef.current.node().getContext("2d")
        t.save()
        t.clearRect(0, 0, width, height)
        for(var i = 0; i < points.length; ++i) {
            var n = points[i]
            t.fillStyle = n.color
            t.fillRect(n.x, n.y, pointWidth, pointWidth)
        }
        t.restore()
    }

    function animate (layoutFunc) {
        points.forEach(function(p) {
            p.sx = p.x
            p.sy = p.y
        })

        layoutFunc(points)

        points.forEach(
            function(p) {
                p.tx = p.x
                p.ty = p.y
            }
        )
        timer = d3.timer((t) => {
            var i = Math.min(1, ease(t / duration))
            points.forEach(function(p) {
                p.x = p.sx * (1 - i) + p.tx * i
                p.y = p.sy * (1 - i) + p.ty * i
            })
            draw()

            return (1 === i && 
                (
                    timer.stop(),
                    currLayout = (currLayout + 1) % layouts.length,
                    animate(layouts[currLayout])
                )
            )
        })
    }

    useEffect(function() {
        screenScale = window.devicePixelRatio || 1

        canvasRef.current = d3.select("#dataviz")
            .append("canvas")
            .attr("width", width*screenScale)
            .attr("height", height*screenScale)
            .style("width", width+"px")
            .style("height", height+"px")
            .on("click", function() {
                d3.select(".play-control").style("display","")
                if (timer) timer.stop()
            })
        
        canvasRef.current.node().getContext("2d")
            .scale(screenScale,screenScale)

        toGrid(points)

        draw()

        d3.select("#dataviz")
            .append("div")
            .attr("class","play-control")
            .text("PLAY")
            .on("click", function() {
                animate(layouts[currLayout])
                d3.select(this).style("display","none")
            })
    }, [])
    return (
        <>
            <div id="dataviz" ref={canvasRef}></div>
            <div className="visually-hidden" aria-live="status" ref={liveRegionRef}>
                {announcement}
            </div>
        </>
    )
}

export default DataViz