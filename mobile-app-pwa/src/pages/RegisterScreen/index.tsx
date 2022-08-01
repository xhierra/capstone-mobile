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
  IonLabel,
  IonModal,
} from "@ionic/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
const RegisterScreen = () => {
  const { signup } = useMoralis();
  const [present, dismiss] = useIonToast();

  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: any) => {
    const response: any = await signup(
      registerData.username,
      registerData.password
    );
    if (response === undefined) {
      present({
        buttons: [{ text: "Close", handler: () => dismiss() }],
        message: "Account already exists for this username.",
        onDidDismiss: () => console.log("dismissed"),
        onWillDismiss: () => console.log("will dismiss"),
      });
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
                  <h5>Create Account</h5>
                </IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonInput
                name="email"
                value={registerData.email}
                placeholder="Enter email"
                type="email"
                onIonChange={handleChange}
              />
            </IonRow>

            <IonRow>
              <IonInput
                name="username"
                value={registerData.username}
                placeholder="Enter username"
                onIonChange={handleChange}
              />
            </IonRow>

            <IonRow>
              <IonInput
                name="password"
                value={registerData.password}
                placeholder="Enter password"
                type="password"
                onIonChange={handleChange}
              />
            </IonRow>

            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={handleAuth}>
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

export default RegisterScreen;
