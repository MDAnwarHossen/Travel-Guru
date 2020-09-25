import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Destination from './Components/Destination/Destination';
import Hotels from './Components/Hotels/Hotels';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const PlaceContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState ({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/news">
            <UnderConstruction></UnderConstruction>
          </Route>

          <Route path="/destination/:placeId">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <UnderConstruction></UnderConstruction>
          </Route>
          <Route path="/contact">
            <UnderConstruction></UnderConstruction>
          </Route>
          <PrivateRoute path="/hotels/:placeId">
            <Hotels></Hotels>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      
      </UserContext.Provider>
      
      
    
  );
}

export default App;
