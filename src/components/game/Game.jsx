import React from "react";
import Border from "../border/Border";
import "./game.css"

const Game = () =>{
    const player1 = localStorage.getItem("player1", "player1")
    const player2 = localStorage.getItem("player2", "player2")

    return(
 <div className="hero">
    <h2 className="gameTitle">PORA ROZPOCZĄĆ GRĘ</h2>
    <div className="game">
        <div className="game__player1">
                {player1}
            <div className="game__player1--score">TWÓJ WYNIK TO: <br />0</div>
        </div>
        <div className="game__board">
            <Border />
        </div>
        <div className="game__player2">
                {player2}
            <div className="game__player2--score">TWÓJ WYNIK TO: <br />0</div>
        </div>
    </div>
</div>
    )
}

export default Game;