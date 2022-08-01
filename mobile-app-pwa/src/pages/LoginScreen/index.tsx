import "./style.css";
import React from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { useHistory } from "react-router";

const LoginScreen = () => {
  const history = useHistory();
  const { login } = useMoralis();
  const [present, dismiss] = useIonToast();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: any) => {
    const response: any = await login(loginData.username, loginData.password);
    if (response === undefined) {
      present({
        buttons: [{ text: "Close", handler: () => dismiss() }],
        message: "Invalid credential",
        onDidDismiss: () => console.log("dismissed"),
        onWillDismiss: () => console.log("will dismiss"),
      });
    }

    if (response !== undefined) {
      history.push("/home");
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText
                  color="primary"
                  style={{ textAlign: "center", paddingTop: "2em" }}
                >
                  <h5>Login in CrypInto</h5>
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonInput
                name="username"
                value={loginData.username}
                placeholder="Enter username"
                onIonChange={handleChange}
              />
            </IonRow>

            <IonRow>
              <IonInput
                name="password"
                value={loginData.password}
                placeholder="Enter password"
                type="password"
                onIonChange={handleChange}
              />
            </IonRow>

            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={handleAuth}>
                  Login
                </IonButton>
                <IonButton
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Register
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginScreen;
