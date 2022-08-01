import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home/tab1/">
          <Tab1 />
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
        s
        <IonTabButton tab="/home/tab1" href="/home/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/home/tab2" href="/home/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="/home/tab3" href="/home/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
