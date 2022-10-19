import React, { useState } from 'react'
import { 
    IonContent,
    IonHeader, 
    IonToolbar,
    IonItem,
    IonApp, 
    IonImg,
    IonList,
    IonInput,
    IonButton,
    IonListHeader,
    useIonAlert
} from '@ionic/react';

/*Styles*/
import Themes from '../../theme/Theme'
import './SignUpPage.css'
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { UserClientAPI, UserProps, IResponse } from '../../services/UserClientAPI';

/*MockData*/
const logoProps = {
  url: '/assets/img/Logo.png',
  alt: 'GeekSearch logo'
}
const SignUpPage:React.FC = () => {

  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const history = useHistory()
  const [alertError] = useIonAlert()

  const handleHistory = (endPoint:string) => {
    history.push(endPoint)
  }

  const handleSignUp = () => {

    const userClientApi = new UserClientAPI

    const dataUser: UserProps = {
      name: name,
      email: email,
      password: password
    }
    
    const result:IResponse = userClientApi.create(dataUser)
    
    if(result.valid){
      history.push("Home")
    }
    else{
      if(result.error){
        alertError("Erro ao conectar com o banco de dados, procure um administrador!")
      }else{
        alertError({
          header: 'Por favor preencha todos os campos!',
          buttons: ['OK'],
        })
      }
    }
  }


  return (
    <IonApp className='SignUpApp'>
      <IonHeader>
        <IonToolbar className='ionToolbar' color={Themes.headerMenuColor}>
          <IonImg src={logoProps.url}  alt={logoProps.alt}/>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonListHeader></IonListHeader>
        <IonList>
          <IonItem>
            <IonInput placeholder='Name' onIonChange={e => setName(e.detail.value!)}>
            </IonInput>
          </IonItem>
          
          <IonItem>
            <IonInput placeholder='Email' onIonChange={e => setEmail(e.detail.value!)}>
            </IonInput>
          </IonItem>
          
          <IonItem>
            <IonInput placeholder='Password' onIonChange={e => setPassword(e.detail.value!)}>
            </IonInput>
          </IonItem>
        </IonList>

        <IonButton 
          fill='solid' 
          expand='block' 
          color={Themes.primaryButtonColor}
          onClick={handleSignUp}
        >
          Sign Up
        </IonButton>

        <IonButton 
          fill='solid' 
          color={Themes.defButtonColor} 
          style={{marginLeft:"12vw",marginRight:"auto",fontSize:"8px",width:"35vw"}}
          onClick={()=>("ForgotPassword")}
        >
          Forgot to password
        </IonButton>
        
        <IonButton 
          fill='solid'  
          color={Themes.secondaryButtonColor} 
          style={{marginLeft:"5vw",fontSize:"8px",width:"35vw"}}
          onClick={()=>(handleHistory("Login"))}>
          Login
        </IonButton>

      </IonContent>
    </IonApp>
  )
}

export default SignUpPage