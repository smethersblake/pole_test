import React, { createContext, useState } from "react";

export const PoleContext = createContext({})
export const PoleContextProvider = ({ children }) =>
{
    const [pole, setPole] = useState({
    // setPole({
        length: 0,
        diameter: 0,
        thickness: 0
    })
    const updateLength = (length) =>
    {
        setPole((prevState) =>
        {
            return { ...prevState, length}
        })
    }
    const updateThickness = (thickness) =>
    {
        setPole((prevState) =>
        {
            return { ...prevState, thickness}
        })
    }
    const updateDiameter = (diameter) =>
    {
        setPole((prevState) =>
        {
            return { ...prevState, diameter}
        })
    }
    const value = {pole, setPole, updateLength, updateThickness, updateDiameter}
    return (<PoleContext.Provider value={value}>{children}</PoleContext.Provider>)
}