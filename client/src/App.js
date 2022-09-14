import React from "react";
import "./CSS/App.css";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Lander from "./Pages/Lander";
import Header from "./Pages/Header";
import ItemList from "./Pages/Dropdown/ItemList";
import BoroughPage from "./Pages/BoroughPage";
import SpotPage from "./Pages/SpotPage";
import Bookmarks from "./Pages/Bookmarks";
import Footer from "./Pages/Footer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Map from "./Pages/Map";

const App = () => {
  return (
    <StyledWrapper>
      <Header />
      <Switch>
        <Route exact path="/">
          <Lander />
        </Route>
        <Route exact path="/textmenu">
          <ItemList />
        </Route>
        <Route exact path={`/borough/:borough`}>
          <BoroughPage />
        </Route>
        <Route exact path={`/borough/:borough/:id`}>
          <SpotPage />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
      </Switch>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
`;

export default App;
