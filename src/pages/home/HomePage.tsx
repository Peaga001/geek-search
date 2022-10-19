import React, { useEffect, useState } from 'react'
import { 
    IonButtons,
    IonContent,
    IonHeader, 
    IonMenuButton, 
    IonTitle, 
    IonToolbar,
    IonSearchbar,
    IonAccordionGroup,
    IonAccordion, 
    IonItem, 
    IonLabel,
    IonApp, 
    IonGrid,
    useIonAlert
} from '@ionic/react';

/*Styles*/
import Themes from '../../theme/Theme'
import './HomePage.css'

/*Components*/
import { caretDownCircle } from 'ionicons/icons';
import api from '../../services/api';

/*MockData*/


const HomePage:React.FC = () => {

  const [dataHome, setDataHome] = useState([])
  const [alertError] = useIonAlert()

  useEffect(() => {

    api.get("/home/")
    .then((response) => {

      const success = response.data.success

      if(success){
        setDataHome(response.data.dados)
      }
    })
    .catch((err) => {
      alertError("Erro ao conectar com o banco de dados, procure um administrador!")
    })

  },[])

  return (
    <IonApp className='HomeApp'>
      <IonHeader>
        <IonToolbar color={Themes.toolbarColor}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        
        <IonGrid>
          <IonSearchbar></IonSearchbar>
        </IonGrid>
  
        <IonAccordionGroup expand='inset'>

        {dataHome.map((GroupItem:DataProps,indexGroup:number) => {
            return (
              <IonAccordion key={indexGroup} toggleIcon={caretDownCircle} toggleIconSlot="start">
                  <IonItem slot="header" color={Themes.menuColor}>
                      <IonLabel>{GroupItem.ItemTitle}</IonLabel>
                  </IonItem>
                  {GroupItem.dataItens.map((Item,indexItem)=>{
                    return (
                      <div className="ion-padding" key={indexItem} slot="content">{Item}</div>
                    )
                  })}
              </IonAccordion>
            )
          })}
        </IonAccordionGroup>
      </IonContent>
    </IonApp>
  )
}

export default HomePage