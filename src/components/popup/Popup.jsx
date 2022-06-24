import React from "react";
import { usePoints } from "../context/pointsContext";
import { CgCloseR } from 'react-icons/cg';
import "./popup.css"
import { useNames } from "../context/NamesContext";
import { useNavigate } from "react-router-dom";


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

export const SelectPlayer = () =>{
    const {showName, setShowName} = useNames()
    const {selectPlayer, setSelectPlayer} = useNames()
    const history = useNavigate()

const handleCloseNames = () =>{
    setShowName(false)
    history("/game")
}
    
return(
    <div className="popup">
    <div className="popup__bg"></div>
    <div className="popup__window">
        <CgCloseR onClick={handleCloseNames} className="popup__window--icon"/>
        <h2 className="popup__window--title">LOSOWANIE ZAWODNIKA</h2>
        <h3 className="popup__window--info">ZACZYNA ZAWODNIK: <br />{selectPlayer}</h3>
    </div>
</div>
)
}