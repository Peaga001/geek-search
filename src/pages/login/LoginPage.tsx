import React, { useEffect, useState } from 'react'
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
    useIonAlert,
} from '@ionic/react';

import { useHistory } from "react-router-dom";

/*Styles*/
import Themes from '../../theme/Theme'
import './LoginPage.css'

/* Services */
import api from '../../services/api';

/*MockData*/
const logoProps = {
  url: '/assets/img/Logo.png',
  alt: 'GeekSearch logo'
}

const LoginPage:React.FC = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const history = useHistory()
  const [alertError]   = useIonAlert()
  

  const handleHistory = (endPoint:string) => {
    history.push(endPoint)
  }

  const handleLogin = () => {

    api.post("/user/", {
      email: email,
      password: password,
    })
    .then((response) => {

      const valid = response.data.valid

      if(valid){
        history.push("Home")
      }
      else{
        alertError({
          header: 'Login e (ou) senha inválido(s)!',
          buttons: ['OK'],
        })
      }
    })
    .catch((err) => {
      alertError("Erro ao conectar com o banco de dados, procure um administrador!")
    });
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
            <IonInput 
              type='text'
              placeholder='Email' 
              onIonChange={e => setEmail(e.detail.value!)}
            >
            </IonInput>
          </IonItem>
          
          <IonItem>
            <IonInput
              type='password'
              placeholder='Password'
              onIonChange={e => setPassword(e.detail.value!)}
            >
            </IonInput>
          </IonItem>
        </IonList>

        <IonButton 
          fill='solid' 
          expand='block' 
          color={Themes.primaryButtonColor} 
          onClick={handleLogin}
        >
          Login
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
          onClick={()=>(handleHistory("SignUP"))}>
          SignUp
        </IonButton>
        

      </IonContent>
    </IonApp>
  )
}

export default LoginPage