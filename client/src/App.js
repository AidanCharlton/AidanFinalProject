import React from "react";
import './CSS/App.css'
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Lander from "./Pages/Lander";
import Header from "./Pages/Header"; 
import ItemList from "./Pages/Dropdown/ItemList";
import BoroughPage from "./Pages/BoroughPage";
import Footer from "./Pages/Footer"

const App = () => { 
  return (
    <StyledWrapper>
      <Header/>
      <Switch>
        <Route exact path='/home'>
          <Lander />
        </Route>
        <Route exact path='/textmenu'>
          <ItemList/>
        </Route>
        <Route exact path={`/:borough`}>
          <BoroughPage/>
        </Route>
      </Switch>
      <Footer/>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
`

export default App;
