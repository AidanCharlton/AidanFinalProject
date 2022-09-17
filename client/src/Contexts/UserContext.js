import React, { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [likedSpots, setLikedSpots] = useState([]);
  const [userBookmarks, setUserBookmarks] = useState([]);
  const [accountCreated, setAccountCreated] = useState();

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        likedSpots,
        setLikedSpots,
        userBookmarks,
        setUserBookmarks,
        accountCreated,
        setAccountCreated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
