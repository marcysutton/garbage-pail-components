import React from "react"

import CognitiveIcon from "./icons/cognitive"
import VisionIcon from "./icons/vision"
import HearingIcon from "./icons/hearing"
import MobilityIcon from "./icons/mobility"
import SpeechIcon from "./icons/speech"

const A11yDiagram = () => (
    <div className="a11yDiagram">
        <div>
            <figure>
                <VisionIcon />
                <figcaption>Vision</figcaption>
            </figure>
            <figure>
                <MobilityIcon />
                <figcaption>Mobility</figcaption>
            </figure>
            <figure>
                <CognitiveIcon />
                <figcaption>Cognition</figcaption>
            </figure>
            <figure>
                <HearingIcon />
                <figcaption>Hearing</figcaption>
            </figure>
            <figure>
                <SpeechIcon />
                <figcaption>Speech</figcaption>
            </figure>
        </div>
        <p>Icons by The Noun Project</p>
    </div>
)

export default A11yDiagram
