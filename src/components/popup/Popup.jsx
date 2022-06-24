import React, { useEffect, useState } from "react";
import { usePoints } from "../context/pointsContext";
import { CgCloseR } from 'react-icons/cg';
import "./popup.css"
import { useNames } from "../context/NamesContext";
import { useNavigate } from "react-router-dom";


export const WinnerPopup = () =>{
const {showPopup, setShowPopup} = usePoints()
const {winnerName, setWinnerName} = usePoints()
const [loserName, setLoserName] = useState([])
const player1 = localStorage.getItem("player1", "player1")
const player2 = localStorage.getItem("player2", "player2")

const handleClose = () =>{
    setShowPopup(false)
}
useEffect(()=>{
if(winnerName===player1){
    setLoserName(player2)
}
else{
    setLoserName(player1)
}
},[winnerName])
    return(
        <div className="popup">
            <div className="popup__bg"></div>
            <div className="popup__window">
                <CgCloseR onClick={handleClose} className="popup__window--icon"/>
                <h2 className="popup__window--title">GRATULACJE</h2>
                <h3 className="popup__window--info">WYGRAŁ {winnerName}</h3>
                <p className="popup__window--loserName">teraz zaczyna grę zawonik: {loserName}</p>
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

export const TieGame = () =>{
const {showTie, setShowTie} = usePoints()
const {player, setPlayer} = useNames()
const [nextPlayer, setNextPlayer] = useState([])
const player1 = localStorage.getItem("player1", "player1")
const player2 = localStorage.getItem("player2", "player2")

useEffect(()=>{
    if(player==="X"){
        setNextPlayer(player1)
    }
    else{
        setNextPlayer(player2)
    }
},[player])
const handleCloseTie = () =>{
    setShowTie(false)
}
    return(
        <div className="popup">
        <div className="popup__bg"></div>
        <div className="popup__window">
            <CgCloseR onClick={handleCloseTie} className="popup__window--icon"/>
            <h2 className="popup__window--title">REMIS</h2>
            <h3 className="popup__window--info">ZACZYNA ZAWODNIK: <br />{nextPlayer}</h3>
        </div>
    </div>
    )
}
