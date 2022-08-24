import React from "react";
import '../CSS/Lander.css'

const Lander = () => {

    const handleClick = () => {
        console.log(window.event.target)
    }

    return (
        <div className="container">
        <div className="gridbox">
            <button className="west-island box-styling" onClick={() => handleClick()}>
                <span className="textrotate">west-island</span>
            </button>
            <button className="saint-laurent box-styling">
                <span className="textrotate">saint-laurent</span>
            </button>
            <button className="ahuntsic box-styling">
                <span className="textrotate">ahuntsic</span>
            </button>
            <button className="montreal-north box-styling">
                <span className="textrotate">montreal-north</span>
            </button>
            <button className="mtl-east box-styling">
                <span className="textrotate">mtl-east</span>
            </button>
            <button className="dorval box-styling">
                <span class="textrotate">dorval</span>
            </button>
            <button className="hampstead box-styling">
                <span className="textrotate">hampstead</span>
            </button>
            <button className="tmr box-styling">
                <span className="textrotate">TMR</span>
            </button>
            <button className="cdn box-styling">
                <span className="textrotate">CDN</span>
            </button>
            <button className="parc-ex box-styling">
                <span className="textrotate">parc-ex</span>
            </button>
            <button className="little-italy box-styling">
                <span className="textrotate">little-italy</span>
            </button>
            <button className="rosemont box-styling">
                <span className="textrotate">rosemont</span>
            </button>
            <button className="sud-est box-styling">
                <span className="textrotate">sud-est</span>
            </button>
            <button className="lachine box-styling">
                <span className="textrotate">lachine</span>
            </button>
            <button className="mtl-west box-styling">
                <span className="textrotate">mtl-west</span>
            </button>
            <button className="ndg box-styling">
                <span className="textrotate">NDG</span>
            </button>
            <button className="westmount box-styling">
                <span className="textrotate">westmount</span>
            </button>
            <button className="downtown box-styling">
                <span className="textrotate">downtown</span>
            </button>
            <button className="plateau box-styling">
                <span className="textrotate">plateau</span>
            </button>
            <button className="sud-ouest box-styling">
                <span className="textrotate">sud-ouest</span>
            </button>
            <button className="village box-styling">
                <span className="textrotate">village</span>
            </button>
            <button className="hochelaga box-styling">
                <span className="textrotate">hochelaga</span>
            </button>
            <button className="old-port box-styling">
                <span className="textrotate">old-port</span>
            </button>
        </div>
    </div>
    )
}

export default Lander