import React from "react";
import { usePoints } from "../context/pointsContext";
import { CgCloseR } from 'react-icons/cg';
import "./popup.css"


export const WinnerPopup = () =>{
const {showPopup, setShowPopup} = usePoints()
const {winnerName, setWinnerName} = usePoints()

const handleClose = () =>{
    setShowPopup(false)
}
    return(
        <div className="popup">
            <div className="popup__bg"></div>
            <div className="popup__window">
                <CgCloseR onClick={handleClose} className="popup__window--icon"/>
                <h2 className="popup__window--title">GRATULACJE</h2>
                <h3 className="popup__window--info">WYGRAŁ {winnerName}</h3>
            </div>
        </div>
    )
}