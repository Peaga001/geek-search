import React from 'react'
import { 
    IonContent,
    IonHeader, 
    IonToolbar,
    IonApp, 
    IonImg,
    IonList,
    IonTitle,
    IonItemDivider,
    IonButtons,
    IonMenuButton
} from '@ionic/react';

/*Styles*/
import Themes from '../../theme/Theme'
import './MySettingsPage.css'

/*Components*/
import IonToggleComponent from '../../components/toggle/IonToggleComponent';

/*Mockdata*/
const logoProps = {
  url: '/assets/img/Logo.png',
  alt: 'GeekSearch logo'
}


const MySettingsPage:React.FC = () => {
  return (
    <IonApp className='MySetApp'>
      <IonHeader>
        <IonToolbar color={Themes.toolbarColor}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
                My Settings    
            </IonTitle>
        </IonToolbar>

        <IonToolbar className='ionToolbar'>
          <IonImg src={logoProps.url}  alt={logoProps.alt} className="MyProfileImg"/>
        </IonToolbar>

        <IonToolbar className='ionToolbar'>
            <IonTitle>Username</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        
            <IonList>
                <IonToggleComponent color='secondary' text='Option 1'/>
                <IonToggleComponent color='secondary' text='Option 2'/>
                <IonToggleComponent color='secondary' text='Option 3'/>
                <IonItemDivider>
                    <IonTitle>Theme</IonTitle>
                </IonItemDivider>
                <IonToggleComponent color='secondary' text='Dark'/>
            </IonList>
 
      </IonContent>
    </IonApp>
  )
}

export default MySettingsPage