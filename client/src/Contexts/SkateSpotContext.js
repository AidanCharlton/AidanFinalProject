import React, { useState, createContext } from "react";

export const SkateSpotContext = createContext(null);

export const SkateSpotProvider = ({ children }) => {
  const [boroughs, setBoroughs] = useState([]);
  const [currentSpot, setCurrentSpot] = useState();
  const [allSpots, setAllSpots] = useState([]);
  const [selectedBorough, setSelectedBorough] = useState();
  const features = [
    "quarter-pipe",
    "half-pipe",
    "bowl",
    "bank",
    "hubba",
    "flat-bar",
    "handrail",
    "kinked-rail",
    "stair-set",
    "bump-to-bar",
    "curb",
    "skatepark",
    "plaza",
    "ledge",
    "manual",
    "crust",
  ];

  return (
    <SkateSpotContext.Provider
      value={{
        boroughs,
        setBoroughs,
        currentSpot,
        setCurrentSpot,
        allSpots,
        setAllSpots,
        selectedBorough,
        setSelectedBorough,
        features,
      }}
    >
      {children}
    </SkateSpotContext.Provider>
  );
};
