import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNames } from "../context/NamesContext";
import "./home.css"

const Home = () =>{

    const [showButton, setShowButton] = useState(false)
    const {player1, setPlayer1, player2, setPlayer2} = useNames()
    const history = useNavigate()

    const checkPlayer1 = (val) =>{
        setPlayer1(val)
    }
    const checkPlayer2 = (val) =>{
        setPlayer2(val)
    }
    const showBtn = () =>{
        if(player1.length > 1 && player2.length > 1){
            setShowButton(true)
        }
        else{
            setShowButton(false)
        }
    }

    const handleOpenGame = () =>{
        history("/game")
        localStorage.setItem("player1",player1)
        localStorage.setItem("player2", player2)
    }
    useEffect(()=>{
        showBtn()
    },[player1, player2])
    
    return(
        <div className="home">
            <h1 className="home__title">KÓŁKO I KRZYŻYK</h1>
            <div className="home__mainView">
                <h2 className="home__mainView--description">GRACZE, PODAJCIE SWOJE IMIONA</h2>
                <div className="home__mainView--player1">
                    <label htmlFor="player1">IMIĘ GRACZA NR.1</label><br />
                    <input 
                    className="inputs" 
                    type="text" 
                    name="player1" 
                    id="player1"
                    value={player1}
                    onChange={e =>checkPlayer1(e.target.value)}/>
                </div>
                <div className="home__mainView--player2">
                    <label htmlFor="player2">IMIĘ GRACZA NR.2</label><br />
                    <input 
                    className="inputs" 
                    type="text" 
                    name="player2" 
                    id="player2" 
                    value={player2}
                    onChange={e=>checkPlayer2(e.target.value)}/>
                </div>
               {showButton && <button onClick={handleOpenGame} className="home__mainView--button">ZACZYNAMY</button>}
            </div>
        </div>
    )
}

export default Home;