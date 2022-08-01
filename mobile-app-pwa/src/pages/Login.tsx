import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
// @ts-ignore
const Login: React.FC = () => {
  const { login } = useMoralis();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: any) => {
    await login(loginData.username, loginData.password);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText
                color="primary"
                style={{ textAlign: "center", paddingTop: "2em" }}
              >
                <h5>Please Enter Account Credentials</h5>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonInput
              style={{ textAlign: "center", paddingTop: "2em" }}
              name="username"
              value={loginData.username}
              placeholder="Enter Input"
              onIonChange={handleChange}
            />
          </IonRow>

          <IonRow>
            <IonInput
              style={{
                textAlign: "center",
                paddingTop: "2em",
                backgroud: "gray",
              }}
              name="password"
              value={loginData.password}
              placeholder="Enter Input"
              type="password"
              onIonChange={handleChange}
            />
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleAuth}>
                YAWA
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
