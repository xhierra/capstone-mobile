import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/LoginScreen";
import Home from "./pages/Home";
import Splash from "./pages/SplashScreen";
import Register from "./pages/RegisterScreen";

const routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Splash />
        </Route>

        <Route exact path="/login/">
          <Login />
        </Route>

        <Route exact path="/register/">
          <Register />
        </Route>

        <Route path="/home/">
          <Home />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default routes;
