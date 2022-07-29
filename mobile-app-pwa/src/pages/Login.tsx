import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow, IonText } from "@ionic/react";
import { SyntheticEvent, useState } from "react";
// @ts-ignore
const Login: React.FC = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleAuth = (e: any) => {
        alert('YAWA NAKASULOD SI IAN');
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonText color="primary" style={{ textAlign: 'center', paddingTop: '2em' }}>
                                <h5>Please Enter Account Credentials</h5>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonInput style={{ textAlign: 'center', paddingTop: '2em' }} name="username" value={loginData.username} placeholder="Enter Input" onIonChange={handleChange} />
                    </IonRow>

                    <IonRow>
                        <IonInput style={{ textAlign: 'center', paddingTop: '2em', backgroud: 'gray' }} name="password" value={loginData.password} placeholder="Enter Input" type="password" onIonChange={handleChange} />
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" href="/home/" onClick={handleAuth}>YAWA</IonButton>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;