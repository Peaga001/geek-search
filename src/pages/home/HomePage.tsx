import React from 'react'
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
    IonGrid
} from '@ionic/react';

/*Styles*/
import Themes from '../../theme/Theme'
import './HomePage.css'

/*Components*/
import { caretDownCircle } from 'ionicons/icons';

/*MockData*/
const MockDataHome = 
[
  {
    ItemTitle:'Meus livros',
    position:'first',
    dataItens:[
      'Livro 1',
      'Livro 2',
      'Livro 3'
    ]
  },
  {
    ItemTitle:'Meus Games',
    position:'second',
    dataItens:[
      'Game 1',
      'Game 2',
      'Game 3'
    ]
  },
  {
    ItemTitle:'Meus Quadrinhos',
    position:'third',
    dataItens:[
      'Quadrinhos 1',
      'Quadrinhos 2',
      'Quadrinhos 3'
    ]
  },
  {
    ItemTitle:'Meus Jogos de Tabuleiro',
    position:'fourth',
    dataItens:[
      'Jogos 1',
      'Jogos 2',
      'Jogos 3'
    ]
  },
  {
    ItemTitle:'Meus RPGs',
    position:'fifth',
    dataItens:[
      'RPG 1',
      'RPG 2',
      'RPG 3'
    ]
  },
]

const HomePage:React.FC = () => {
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

        {MockDataHome.map((GroupItem,indexGroup) => {
            return (
              <IonAccordion value={GroupItem.position} key={indexGroup} toggleIcon={caretDownCircle} toggleIconSlot="start">
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