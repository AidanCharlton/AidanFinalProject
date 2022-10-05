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
import SuccessfulSignUp from "./Components/SuccessfulSignUp";
import SubmitSpot from "./Pages/SubmitSpot";

const App = () => {
  return (
    <StyledWrapper>
      <Header />
      <BodySection>
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
          <Route exact path="/itemlist">
            <ItemList />
          </Route>
          <Route exact path="/success">
            <SuccessfulSignUp />
          </Route>
          <Route exact path="/submit">
            <SubmitSpot />
          </Route>
        </Switch>
      </BodySection>
      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const BodySection = styled.div`
  height: calc(100vh - 140px);
  margin-top: 70px;
`;

export default App;
