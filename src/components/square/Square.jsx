import React from "react";
import "./square.css"

const Square = ({val, chooseSquare}) => {

    return(
        <div className="square" onClick={chooseSquare}><span className="square__val">{val}</span></div>
    )
}
export default Square