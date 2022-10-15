import React from 'react';
import { IonText } from '@ionic/react';

/*Components*/
import { CardComponent } from './CardComponent';

interface CardStoreProps  {
  srcImg: string
  cardDsc: string
  cardPrice: number
}

/*Ilustration Price Format*/
const priceFormat = (price:number) => {
  return 'R$'+price+',00'
}

export const CardStoreComponent: React.FC<CardStoreProps> = ({srcImg, cardDsc, cardPrice}) => {
  return (
    <>
      <CardComponent srcImg={srcImg} />
      <IonText>{cardDsc}</IonText><br></br>

      <IonText>
        <strong>
          {priceFormat(cardPrice)}
        </strong>
      </IonText>
    </>
  );
};
