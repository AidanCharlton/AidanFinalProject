import React from "react";
import '../CSS/Lander.css'
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";


const Lander = () => {

    const history = useHistory()
    const handleClick = () => {
        history.push(`/${window.event.target.innerText}`)
    }


    return (
        <div className="container">
            <div className="gridbox">

                <div id="west-island" className="box-styling" onClick={() => handleClick()}>
                    <label className="textrotate">west-island</label>
                </div>
                <button id="saint-laurent" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">saint-laurent</span>
                </button>
                <button id="ahuntsic" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">ahuntsic</span>
                </button>
                <button id="mtl-north" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">mtl-north</span>
                </button>
                <button id="rdp" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">rdp</span>
                </button>
                <button id="dorval" className="box-styling" onClick={() => handleClick()}>
                    <span class="textrotate">dorval</span>
                </button>
                <button id="hampstead" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">hampstead</span>
                </button>
                <button id="tmr" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">tmr</span>
                </button>
                <button id="cdn" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">cdn</span>
                </button>
                <button id="park-extension" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">park-extension</span>
                </button>
                <button id="little-italy" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">little-italy</span>
                </button>
                <button id="rosemont" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">rosemont</span>
                </button>
                <button id="mtl-east" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">mtl-east</span>
                </button>
                <button id="lachine" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">lachine</span>
                </button>
                <button id="mtl-west" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">mtl-west</span>
                </button>
                <button id="ndg" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">ndg</span>
                </button>
                <button id="westmount" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">westmount</span>
                </button>
                <button id="downtown" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">downtown</span>
                </button>
                <button id="plateau" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">plateau</span>
                </button>
                <button id="south-west" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">south-west</span>
                </button>
                <button id="village" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">village</span>
                </button>
                <button id="hochelaga" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">hochelaga</span>
                </button>
                <button id="old-port" className="box-styling" onClick={() => handleClick()}>
                    <span className="textrotate">old-port</span>
                </button>
            </div>
        </div>
    )
}

export default Lander