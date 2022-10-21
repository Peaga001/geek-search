import React from 'react'

import { 
    IonGrid,
    IonRow,
    IonCol,
    IonText
} from '@ionic/react';

import { CardStoreComponent } from '../card/CardStoreComponent';
import { Redirect } from 'react-router-dom';


export interface DataSessionProps {
  url:string
  description:string
  price:number
}

export interface SessionGridProps {
  session:string
  dataSession:Array<DataSessionProps>
}


export const SessionGrid: React.FC<SessionGridProps> = ({session, dataSession}) => {
  return (

    <>
      <IonGrid>
        <IonText className='titleSession'>
          <strong>
            {session}
          </strong><br></br>
        </IonText>

        <IonRow>
          {dataSession.map((ItemSession,index) => {
            return ( 
              <IonCol key={index} onClick={() => (<Redirect to="/teste" />)}>
                <CardStoreComponent
                 srcImg={ItemSession.url}
                 cardDsc={ItemSession.description} 
                 cardPrice={ItemSession.price} 
                />
              </IonCol>
            )
          })}
        </IonRow>

      </IonGrid>
    </>
  )
}