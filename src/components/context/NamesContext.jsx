import React, { createContext, useContext, useState, useEffect } from "react";

const NameContext = createContext();

export const useNames = () => {
  return useContext(NameContext);
};

export const NameContextProvider = ({ children }) => {
    const [player1, setPlayer1] = useState([])
    const [player2, setPlayer2] = useState([])
    const [selectPlayer, setSelectPlayer] = useState([])
    let select = ["X", "O"]
    const [player, setPlayer] = useState(select[Math.floor(Math.random()*select.length)])
    const [showName, setShowName] = useState(false)
    
    return(
        <NameContext.Provider value={{player, setPlayer, player1, setPlayer1, player2, setPlayer2, selectPlayer, setSelectPlayer, showName, setShowName}}>
            {children}
        </NameContext.Provider>
    )
}