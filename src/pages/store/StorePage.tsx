import React, { useEffect, useState } from 'react'
import { 
  IonContent,
  IonHeader, 
  IonToolbar,
  IonApp, 
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
  IonGrid,
  useIonAlert,
} from '@ionic/react';

/*Styles*/
import './StorePage.css'
import Themes from '../../theme/Theme'

/*Components*/
import { SessionGrid } from '../../components/grid/SessionGridComponent';
import api from '../../services/api';

/* Interface */
import { SessionGridProps } from '../../components/grid/SessionGridComponent'  
import { ProductClientAPI, IResponseGet, ArrayProductProps } from '../../services/ProductClientAPI';

const StorePage:React.FC = () => {

  const[storeData, setStoreData] = useState(Array<ArrayProductProps>)
  const[alertError] = useIonAlert()

  useEffect(() => {

    const productClientAPI =  new ProductClientAPI
    const responseData: IResponseGet  = productClientAPI.get() 


    if(responseData.valid){
      setStoreData(responseData.data)
    }
    else{
      alertError("Erro ao conectar com o banco de dados, procure um administrador!")
    }

  },[])

  return (
    <IonApp className='StoreApp'>
      <IonHeader>
        <IonToolbar color={Themes.toolbarColor}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonGrid className='IonGridSearchBar'>
          <IonSearchbar></IonSearchbar>
        </IonGrid>

        {storeData.map((Session:SessionGridProps,index) => {
          return (
            <SessionGrid sessionTitle={Session.sessionTitle} dataSession={Session.dataSession} key={index}/>
          )
        })}
        
      </IonContent>
    </IonApp>
  )
}

export default StorePage