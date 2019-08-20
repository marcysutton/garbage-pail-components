import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Carousel from "../components/carousel"

const imageData = [
    "A large black bear inspecting a dumpster",
    "A dump truck full of cut wood",
    "A dumpster overflowing with garbage, photoshopped into a field with flowers",
    "A person with gum stuck to their boot",
    "Reusable water bottles"
]

const Demo2 = () => (
    <StaticQuery
        query={graphql`
            query {
                gallery: allFile(
                    filter: { sourceInstanceName: { eq: "gallery" } }
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
                <div
                    style={{
                        height: "1200px",
                        position: "absolute",
                        width: "100%"
                    }}
                >
                    <h2>Image Gallery</h2>
                    <Carousel
                        images={data.gallery.edges}
                        altTexts={imageData}
                    />
                    <p>
                        Doggo ipsum stop it fren borking doggo shoober floofs,
                        very jealous pupper thicc. Pats smol borking doggo with
                        a long snoot for pats blop pupper, borking doggo
                        wrinkler. Lotsa pats big ol pupper h*ck heckin angery
                        woofer pupper, blop heckin mlem.
                    </p>
                </div>
            )
        }}
    />
)

export default Demo2
