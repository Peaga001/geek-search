import { IonItem, IonLabel, IonText, IonToggle } from '@ionic/react'
import React from 'react'
import './IonToggleComponent.css'

interface IonToggleProps {
    color:string
    text:string
}

const IonToggleComponent: React.FC<IonToggleProps> = ({color,text}) => {
  return (
    <IonItem className='IonToggleItem'>
        <IonLabel>{text}</IonLabel><IonToggle color={color}/>
    </IonItem>
  )
}

export default IonToggleComponent