import React from 'react'
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
} from '@ionic/react';

/*Styles*/
import './StorePage.css'
import Themes from '../../theme/Theme'

/*Components*/
import { SessionGrid } from '../../components/grid/SessionGridComponent';

/*MockData*/
const MockDataStore = [
  {
    session:'Livros',
    dataSession:[
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 1',
        price:5.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 2',
        price:7.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 3',
        price:10.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 4',
        price:12.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 5',
        price:5.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 6',
        price:7.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 7',
        price:10.0
      },
    
      {
        url:'/assets/img/Logo.png',
        description:'Descrição livro 8',
        price:12.0
      }
    ]
  },

  {
    session:'Games',
    dataSession:[
      {
        url:'/assets/img/Logo.png',
        description:'Games 1',
        price:9.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Games 2',
        price:8.0
      },
      {
        url:'/assets/img/Logo.png',
        description:'Games 3',
        price:12.0
      },
    
      {
        url:'/assets/img/Logo.png',
        description:'Games 4',
        price:5.0
      }
    ]
  }
]

const StorePage:React.FC = () => {
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

        {MockDataStore.map((Session,index) => {
          return (
            <SessionGrid sessionTitle={Session.session} dataSession={Session.dataSession} key={index}/>
          )
        })}
        
      </IonContent>
    </IonApp>
  )
}

export default StorePage