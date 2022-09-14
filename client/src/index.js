import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SkateSpotProvider } from "./Contexts/SkateSpotContext";
import { UserContextProvider } from "./Contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SkateSpotProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </SkateSpotProvider>
);
