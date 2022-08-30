import React, { useEffect, useState } from "react"
import '../CSS/Component.css'

const MiniMap = ({ borough }) => {
    const [setCurrentBorough] = useState()

    useEffect(() => {
        setCurrentBorough(`mini-${borough}`)
    }, [setCurrentBorough, borough])

    const handleClick = () => {
        console.log(window.target.value.id)
    }
    return (
        <>
            <div className="mini-gridbox">
                <button style={{ 'background': 'cadetblue' }} id="mini-west-island" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-saint-laurent" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-ahuntsic" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-mtl-north" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-rdp" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-dorval" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-hampstead" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-tmr" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-cdn" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-park-extension" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-little-italy" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-rosemont" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-mtl-east" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-lachine" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-mtl-west" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-ndg" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-westmount" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-downtown" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-plateau" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-south-west" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-village" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-hochelaga" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
                <button id="mini-old-port" className="mini-box-styling" onClick={() => handleClick()}>
                </button>
            </div>

        </>
    )
}

export default MiniMap