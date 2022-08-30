import React, { useState, createContext } from "react";

export const SkateSpotContext = createContext(null);

export const SkateSpotProvider = ({ children }) => {
  const [boroughs, setBoroughs] = useState([]);
  const [currentSpot, setCurrentSpot] = useState()
  const [allSpots, setAllSpots] = useState([])
  const [selectedBorough, setSelectedBorough] = useState()

  return (
    <SkateSpotContext.Provider value={{ boroughs, setBoroughs, currentSpot, setCurrentSpot, allSpots, setAllSpots, selectedBorough, setSelectedBorough }}>
      {children}
    </SkateSpotContext.Provider>
  );
};