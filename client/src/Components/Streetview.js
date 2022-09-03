import { useEffect, useState } from "react"
import styled from "styled-components"

const StreetMap = ({ singleSpot }) => {
    const [coordinates, parsedCoordinates] = useState({})

    useEffect(() => {
        const link = singleSpot.link;
        parsedCoordinates(
            {
                lng: (link.split('/maps/@')[1].split('/data')[0].split(','))[0],
                lat: (link.split('/maps/@')[1].split('/data')[0].split(','))[1]
            }
        )
    }, [singleSpot.link])

    return (
        <FrameWrapper>
            <p>{coordinates.lng}, {coordinates.lat}</p>
            <iframe
                src={singleSpot.iframe}
                width="600"
                height="400"
                title="street-view"
            ></iframe>
        </FrameWrapper>
    )
}

const FrameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    padding-bottom: 20px;
`

export default StreetMap