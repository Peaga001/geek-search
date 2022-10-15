import React from 'react';
import { 
  IonCard,
  IonImg
} from '@ionic/react';

interface CardProps  {
  srcImg: string
}

export const CardComponent: React.FC<CardProps> = ({srcImg}) => {
  return (
    <>
      <IonCard>
        <IonImg src={srcImg}/>
      </IonCard>
    </>
        
  );
};
