import * as d3 from 'd3'

function phyllotaxisLayout(points, pointWidth, xOffset, yOffset, iOffset) {
    console.log('phyllotaxisLayout', typeof points)
    if (xOffset===void 0) xOffset = 0;
    if (yOffset===void 0) yOffset = 0;
    if (iOffset===void 0) iOffset = 0;
    var theta = Math.PI * (3 - Math.sqrt(5));
    var pointRadius = pointWidth / 2;
    points.forEach(function(point, i) {
        var index = (i + iOffset) % points.length;
        var phylloX = pointRadius * Math.sqrt(index) * Math.cos(index * theta);
        var phylloY = pointRadius * Math.sqrt(index) * Math.sin(index * theta);
        point.x = xOffset + phylloX - pointRadius;
        point.y = yOffset + phylloY - pointRadius;
    });
    return points
}
function gridLayout(points, pointWidth, gridWidth) {
    console.log('gridLayout', typeof points)
    var pointHeight = pointWidth;
    var pointsPerRow = Math.floor(gridWidth / pointWidth);
    // var numRows=points.length / pointsPerRow;
    points.forEach(function(point, i) {
        point.x = pointWidth * (i % pointsPerRow);
        point.y = pointHeight * Math.floor(i / pointsPerRow)
    });
    return points
}
function randomLayout(points, pointWidth, width, height) {
    console.log('randomLayout', typeof points)
    points.forEach(function(point, i) {
        point.x = Math.random() * (width - pointWidth);
        point.y = Math.random() * (height - pointWidth)
    });
    return points
}
function sineLayout(points, pointWidth, width, height){
    console.log('sineLayout', typeof points)
    var amplitude = .3 * (height / 2);
    var yOffset = height / 2;
    var periods = 3;
    var yScale = d3.scaleLinear().domain(
        [0,points.length - 1]
    ).range(
        [0,periods * 2 * Math.PI]
    );
    points.forEach(function(point, i) {
        point.x = i / points.length * (width - pointWidth);
        point.y = amplitude * Math.sin(yScale(i)) + yOffset;
    });
    return points
}
function spiralLayout(points, pointWidth, width, height) {
    console.log('spiralLayout', typeof points)
    // var amplitude=.3*(height/2);
    var xOffset = width / 2;
    var yOffset = height / 2;
    var periods = 20;
    var rScale = d3.scaleLinear().domain(
        [0,points.length-1]
    ).range(
        [0, Math.min(width / 2, height / 2) - pointWidth]
    );
    var thetaScale = d3.scaleLinear().domain(
        [0,points.length - 1]
    ).range(
        [0,periods * 2 * Math.PI]
    );
    points.forEach(function(point, i) {
        point.x = rScale(i) * Math.cos(thetaScale(i)) + xOffset;
        point.y = rScale(i) * Math.sin(thetaScale(i)) + yOffset
    });
    return points
}
function createPoints(numPoints, pointWidth, width, height) {
    var colorScale = d3.scaleSequential(d3.interpolateViridis).domain(
        [numPoints-1,0]
    );
    var points = d3.range(numPoints).map(function(id) {
        return {
            id:id,
            color:colorScale(id)
        }
    });
    return randomLayout(points, pointWidth, width, height)
}

const DataVizCommon = {
    phyllotaxisLayout,
    gridLayout,
    randomLayout,
    sineLayout,
    spiralLayout,
    createPoints
}
export default DataVizCommon