import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/LoginScreen";
import Splash from "./pages/SplashScreen";
import Register from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import {
  cartOutline,
  chatbubbleEllipsesOutline,
  homeOutline,
} from "ionicons/icons";

const BottomTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home/tab1/">
          <HomeScreen />
        </Route>
        <Route exact path="/home/tab2/">
          <Tab2 />
        </Route>
        <Route path="/home/tab3/">
          <Tab3 />
        </Route>
        <Route exact path="/home/">
          <Redirect to="/home/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="/home/tab1" href="/home/tab1">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/home/tab2" href="/home/tab2">
          <IonIcon icon={cartOutline} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/home/tab3" href="/home/tab3">
          <IonIcon icon={chatbubbleEllipsesOutline} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

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
          <BottomTabs />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default routes;
