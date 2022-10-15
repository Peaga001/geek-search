import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
    IonApp, 
    IonButton, 
    IonButtons, 
    IonCard, 
    IonContent, 
    IonGrid, 
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
 } from '@ionic/react'


 /*Styles*/
import Themes from '../../theme/Theme'
import './LogoutPage.css'

const LogoutPage:React.FC = () => {

    
  const history = useHistory()

  const handleHistory = (endPoint:string) => {
    history.push(endPoint)
  }

  return (
    <IonApp className='LogoutApp'>
        <IonHeader>
            <IonToolbar color={Themes.toolbarColor}>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Logout</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                
                <IonCard>
                    <p className='TitleLogout'>Do you want to exit the system?</p>
                    
                    <IonButton 
                        fill='solid' 
                        color={Themes.secondaryButtonColor} 
                        style={{marginLeft:"5vw",marginRight:"auto",fontSize:"8px",width:"35vw"}}
                        onClick={() => (handleHistory("Login"))}
                    >
                        Yes
                    </IonButton>

                    <IonButton 
                        fill='solid'  
                        color={Themes.primaryButtonColor} 
                        style={{marginLeft:"5vw",fontSize:"8px",width:"35vw"}}
                        onClick={() => (handleHistory("Home"))}
                    >
                        No
                    </IonButton>

                </IonCard>
            </IonGrid>
        </IonContent>
    </IonApp>
  )
}

export default LogoutPage