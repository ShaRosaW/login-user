import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
//import {useAuthState} from "./context/AuthContext";
import PrivateRoute from "./routing/PrivateRoute";


export default function App() {
  // const {isAuthenticated} = useAuthState();

  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            {/*<Route path="/profile">*/}
            {/*  {isAuthenticated ? <Profile /> : <Redirect to="signin" />}*/}
            {/*</Route>*/}
          </Switch>
        </div>
      </>
  );
}


//export default App;
