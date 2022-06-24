import React, { useEffect, useState } from "react";
import { useNames } from "../context/NamesContext";
import { usePoints } from "../context/pointsContext";
import Square from "../square/Square";
import "./boder.css"

const Border = () =>{
    const {points1, setPoints1} = usePoints()
    const {points2, setPoints2} = usePoints()
    const {showPopup, setShowPopup} = usePoints()
    const {winnerName, setWinnerName} = usePoints()
    const player1 = localStorage.getItem("player1", "player1")
    const player2 = localStorage.getItem("player2", "player2")
    const {board, setBoard} = usePoints()
    const {player, setPlayer} = useNames()
    const [result, setResult] = useState({winner:"none", stale:"null"})
    const pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
  
    useEffect(()=>{
        tieGame()
        checkWinner()
        setPlayer((previousPlayer) => {
            if (previousPlayer === "X") return "O";
            else {
              return "X";
            }
          });
    },[board])
   
    useEffect(()=>{
        if(result.stale !=="null"){
        alert(`wyniki: ${result.winner}`)
        }
    },[result])

    const chooseSquare = (square,event) =>{
       setBoard(board.map((val, index)=>{
        if(index === square && val!==""){
        setPlayer((prev)=>{
            if(prev==="X") return "O"; 
            else
            {return "X"}})
     }
            if(index === square && val === ""){
            return player;
            }
           return val;
          }))
    }
    
    const checkWinner = ()=>{
        pattern.forEach(el=>{
        let firstPlayer = board[el[0]]
        if(firstPlayer==='') return;
        let foundWinningPattern = true
        el.forEach(index =>{
            if(board[index] !== firstPlayer){
                foundWinningPattern = false
            }
        })
        if(foundWinningPattern){
            let data1 =JSON.parse(localStorage.getItem("data1","data1")) || 0
            let data2 =JSON.parse(localStorage.getItem("data2","data2")) || 0
        if(player === "O"){
                setShowPopup(true)
                setWinnerName(player2)
                data2++
                }
            else if(player==="X"){
                setShowPopup(true)
                setWinnerName(player1)
                data1++
            }
            localStorage.setItem("data1", JSON.stringify(data1)) 
            setPoints1(data1)
            localStorage.setItem("data2", JSON.stringify(data2))
            setPoints2(data2)
            setTimeout(() => {
                restart()
            }, 500);
        }
        })
     }
    
    const tieGame =  () =>{
        let tie = true;
        board.forEach(square=>{
            if(square ===""){
                tie=false
            }
        })
        if(tie){
            setResult({winner:"remis", stale:"non"})
            restart()
        }
       }
    const restart = () =>{
        setBoard(["","","","","","","","",""])
    }

    
    return(
        <div className="board">
            <div className="board__row">
                <Square val={board[0]} chooseSquare={()=>chooseSquare(0)} className="board__row--square" />
                <Square val={board[1]} chooseSquare={()=>chooseSquare(1)} className="board__row--square" />
                <Square val={board[2]} chooseSquare={()=>chooseSquare(2)} className="board__row--square" />
            </div>
            <div className="board__row">
                <Square val={board[3]} chooseSquare={()=>chooseSquare(3)}className="board__row--square" />
                <Square val={board[4]} chooseSquare={()=>chooseSquare(4)}className="board__row--square" />
                <Square val={board[5]} chooseSquare={()=>chooseSquare(5)} className="board__row--square" />
            </div>
            <div className="board__row">
                <Square val={board[6]} chooseSquare={()=>chooseSquare(6)} className="board__row--square" />
                <Square val={board[7]} chooseSquare={()=>chooseSquare(7)} className="board__row--square" />
                <Square val={board[8]} chooseSquare={()=>chooseSquare(8)} className="board__row--square" />
            </div>
        </div>
    )

}

export default Border;