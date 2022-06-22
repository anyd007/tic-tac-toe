import React, { useEffect, useState } from "react";
import Border from "../border/Border";
import { usePoints } from "../context/pointsContext";
import "./game.css"

const Game = () =>{
    const {points1, setPoints1 } = usePoints()
    const {points2, setPoints2} = usePoints()
    const player1 = localStorage.getItem("player1", "player1")
    const player2 = localStorage.getItem("player2", "player2")

    const handleReset = () =>{
        localStorage.removeItem("data1")
        localStorage.removeItem("data2")
        setPoints1(0)
        setPoints2(0)
    }
    
    return(
 <div className="hero">
    <h2 className="gameTitle">PORA ROZPOCZĄĆ GRĘ</h2>
    <div className="game">
        <div className="game__player1">
                {player1}
            <div className="game__player1--score">TWÓJ WYNIK TO: <br /><span>{points1}</span></div>
        </div>
        <div className="game__board">
            <Border />
        </div>
        <div className="game__player2">
                {player2}
            <div className="game__player2--score">TWÓJ WYNIK TO: <br /><span>{points2}</span></div>
        </div>
        <button onClick={handleReset} className="game__restatGame">OD NOWA</button>
        <button onClick={handleReset} className="game__restatGame2">OD NOWA</button>
    </div>
</div>
    )
}

export default Game;