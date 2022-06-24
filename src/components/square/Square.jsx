import React, { useEffect, useState } from "react";
import { usePoints } from "../context/pointsContext";
import "./square.css"

const Square = ({val, chooseSquare}) => {
   
    return(
        <div className="square" onClick={chooseSquare}><span className="square__val">{val}</span></div>
    )
}
export default Square