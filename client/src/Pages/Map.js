import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Map = ({ bookmarks }) => {
    const [mapArray, setMapArray] = useState();


    useEffect(() => {
        const coordinateArray = bookmarks?.map((mark, id) => {
            return {
                key: id,
                name: mark.data.name,
                borough: mark.data.borough,
                id: mark.data._id,
                coordinates: [
                    mark.data.link.split('/maps/@')[1].split('/data')[0].split(',')[0],
                    mark.data.link.split('/maps/@')[1].split('/data')[0].split(',')[1]
                ],
                streetview: mark.data.link,

            }
        })
        setMapArray(coordinateArray)
    }, [bookmarks])
    return !mapArray ? <></> : (
        <MapContainer center={[45.5019, -73.5674]} zoom={12} scrollWheelZoom={true} className="Map" style={{ 'boxShadow': '0px 0px 10px 1px lightgray', 'border': 'solid 1px lightgray' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                mapArray?.map((mark, id) => {
                    return (
                        <Marker position={mark.coordinates}>
                            <Popup>
                                <Popuptext>
                                    <InfoText><b>{id + 1}. {mark.name}</b></InfoText>
                                    <InfoText><i>{mark.borough}</i></InfoText>
                                    <StyledLink to={`/borough/${mark.borough}/${mark.id}`}>Streetview</StyledLink>
                                </Popuptext>
                            </Popup>
                        </Marker>
                    )
                })
            }

        </MapContainer>
    )
}

const Popuptext = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
`
const InfoText = styled.div`
    margin: 0px;
    padding: 0px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export default Map