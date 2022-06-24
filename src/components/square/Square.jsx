import React, { useEffect, useState } from "react";
import { usePoints } from "../context/pointsContext";
import "./square.css"

const Square = ({val, chooseSquare}) => {
   
    return(
        <button className="square" onClick={chooseSquare}><span className="square__val">{val}</span></button>
    )
}
export default Square