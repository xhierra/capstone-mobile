import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { IonContent, IonPage } from "@ionic/react";
import animationData from "./preloader.json";
import "./style.css";
import { useHistory } from "react-router-dom";
const SplashScreen: React.FC = () => {
  const history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <Lottie options={defaultOptions} height={500} width={400} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
