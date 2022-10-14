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
            <p style={{ 'color': 'grey' }}>{coordinates.lng}, {coordinates.lat}</p>
            <iframe
                src={singleSpot.iframe}
                width="90%"
                height="80%"
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
    height: 90%;

`

export default StreetMap