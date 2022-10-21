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
import { UserClientAPI, HomeDataProps } from '../../services/UserClientAPI';

/*MockData*/


const HomePage:React.FC = () => {

  const [dataHome, setDataHome] = useState(Array<HomeDataProps>)
  const [alertError] = useIonAlert()
  const userClientApi = new UserClientAPI

  useEffect(() => {
      
    const data = userClientApi.get(0)
    
    if(data.valid){
      setDataHome(data.data)
    }
    else{
      alertError("Erro ao conectar com o banco de dados, procure um administrador!")
    }

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

        {dataHome.map((GroupItem:HomeDataProps,indexGroup) => {
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