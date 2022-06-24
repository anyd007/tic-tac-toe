import React, { createContext, useContext, useState, useEffect } from "react";

const PointsContext = createContext();

export const usePoints = () => {
  return useContext(PointsContext);
};

export const PointsContextProvider = ({ children }) => {
    let data1 =JSON.parse(localStorage.getItem("data1","data1")) || 0
    let data2 =JSON.parse(localStorage.getItem("data2","data2")) || 0
    const [points1, setPoints1] = useState(data1)
    const [points2, setPoints2] = useState(data2)
    const [showPopup, setShowPopup] = useState(false)
    const [winnerName, setWinnerName] = useState([])
    const [board, setBoard] = useState(["","","","","","","","",""])
    const [disable, setDisable] = useState(false);
    
    return(
        <PointsContext.Provider value={{points1, setPoints1, points2, setPoints2, board, setBoard, showPopup, setShowPopup, 
        winnerName, setWinnerName, disable, setDisable}}>
            {children}
        </PointsContext.Provider>
    )
}