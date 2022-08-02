import React from "react";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { pin } from "ionicons/icons";

const PostCard: React.FC = () => {
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={pin} slot="start" />
        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
      </IonItem>

      <IonCardContent>
        This is content, without any paragraph or header tags, within an
        ion-cardContent element.
      </IonCardContent>
    </IonCard>
  );
};

export default PostCard;
