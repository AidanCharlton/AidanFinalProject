import { useEffect, useState } from "react"

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
        <>
            <p>{coordinates.lng}, {coordinates.lat}</p>
        </>
    )
}

export default StreetMap