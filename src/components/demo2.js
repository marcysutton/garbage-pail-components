import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Carousel from "../components/carousel"

const imageData = [
    'Backpacking with Rainier the labradoodle',
    'Camping with the dog at a wilderness lake',
    'Carrying puppy Rainier on a mountain hike',
    'Mt. Baker Wilderness at Chain Lakes',
    'Skyline Lake reflection',
    'Bagley the cat wants to go van camping',
    'Sunny trail magic in the North Cascades',
    'Snowy Iceberg the Adventure Van',
    'Rainier in his snow suit in the Baker backcountry',
    'My splitboard in the snow',
]

const Demo2 = () => (
    <StaticQuery query={graphql`
        query {
            gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
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
                <p>Doggo ipsum stop it fren borking doggo shoober floofs, very jealous pupper thicc. Pats smol borking doggo with a long snoot for pats blop pupper, borking doggo wrinkler. Lotsa pats big ol pupper h*ck heckin angery woofer pupper, blop heckin mlem.</p>
            </div>
        )
    }}
    />
)

export default Demo2
