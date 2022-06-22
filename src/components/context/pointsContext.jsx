import React, { createContext, useContext, useState, useEffect } from "react";

const PointsContext = createContext();

export const usePoints = () => {
  return useContext(PointsContext);
};

export const PointsContextProvider = ({ children }) => {
    let data1 =JSON.parse(localStorage.getItem("data1","data1"))
    const [points1, setPoints1] = useState(data1)
    const [points2, setPoints2] = useState([])
    
    return(
        <PointsContext.Provider value={{points1, setPoints1, points2, setPoints2}}>
            {children}
        </PointsContext.Provider>
    )
}