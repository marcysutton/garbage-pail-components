import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Carousel from "../components/carousel"

const imageData = [
    'A large black bear inspecting a dumpster',
    'A dump truck full of cut wood',
    'A dumpster overflowing with garbage, photoshopped into a field with flowers',
    'A person with gum stuck to their boot',
    'Reusable water bottles',
]

const Demo2 = () => (
    <StaticQuery query={graphql`
        query {
            gallery: allFile(
                filter: { sourceInstanceName: { eq: "gallery" }}
                sort: { order: ASC, fields: relativePath }
            ) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid(maxWidth: 400, maxHeight: 400) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `}
    render={data => {
        return (
            <div style={{height: '1200px', position: 'absolute', width: '100%'}}>
                <h2>Image Gallery</h2>
                <Carousel images={data.gallery.edges} altTexts={imageData} />
                <p style={{textAlign: 'left'}}>Garbage, trash, rubbish, or refuse is waste material that is discarded by humans, usually due to a perceived lack of utility. The term generally does not encompass bodily waste products, purely liquid or gaseous wastes, nor toxic waste products. Garbage is commonly sorted and classified into kinds of material suitable for specific kinds of disposal.</p>
            </div>
        )
    }}
    />
)

export default Demo2