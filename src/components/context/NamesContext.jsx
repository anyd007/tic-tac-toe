import React, { createContext, useContext, useState, useEffect } from "react";

const NameContext = createContext();

export const useNames = () => {
  return useContext(NameContext);
};

export const NameContextProvider = ({ children }) => {
    const [player1, setPlayer1] = useState([])
    const [player2, setPlayer2] = useState([])
  
    return(
        <NameContext.Provider value={{player1, setPlayer1, player2, setPlayer2}}>
            {children}
        </NameContext.Provider>
    )
}