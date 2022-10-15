import React from 'react'
import { 
    IonContent,
    IonHeader, 
    IonToolbar,
    IonApp, 
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonText,
    IonCol,
    IonRow,
    IonItem,
    IonList,
} from '@ionic/react';

/*Styles*/
import './AboutPage.css'
import Themes from '../../theme/Theme'

/*Components*/
import { CardComponent } from '../../components/card/CardComponent';

/*MockData*/
const logoProps = {
    url: '/assets/img/Logo.png',
    alt: 'GeekSearch logo'
}

const DeveloperSrc = {
    arthurRibeiro: 'assets/img/Developers/arthurRibeiro.jpg',
    pedroAlmeida: 'assets/img/Developers/pedroALmeida.jpeg',
    pedroMendes: '/assets/img/Developers/pedroMendes.jpg'
}

const AboutPage:React.FC = () => {
  return (
    <IonApp className='AboutApp'>
      <IonHeader>
        <IonToolbar color={Themes.toolbarColor}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>

            <IonGrid>
                
                <IonRow className='rowCardPrimary'>

                <CardComponent srcImg={logoProps.url}/>
                    <IonCol>
                        <IonText>
                            Devido a enorme popularidade da cultura geek resolvemos criar o Geek Search, 
                            um aplicativo com o objetivo de ajudar nosso usuários a encontrar o melhor preço e loja onde podem comprar 
                            seus produtos geeks(Livros, games, quadrinhos, jogos de tabuleiro, etc...). <br></br>
                            Sua principal funcionalidade seriam de servir como uma ferramenta de pesquisas que faria buscas em diversos sites de 
                            compra a procura do produto que o usuário deseja, 
                            retornando uma lista de sites onde o produto pode ser encontrado dando prioridade 
                            onde o mesmo se encontra com menor preço.
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
            
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <CardComponent srcImg={DeveloperSrc.arthurRibeiro}/>
                    </IonCol>
                    
                    <IonCol>
                        <CardComponent srcImg={DeveloperSrc.pedroAlmeida}/>
                    </IonCol>
                    
                    <IonCol>
                        <CardComponent srcImg={DeveloperSrc.pedroMendes}/>
                    </IonCol>
                </IonRow>
                
                <IonRow className='rowDescriptionDevelopers'>
                    <IonCol>

                        <IonList>
                            <IonItem>
                                <IonText>
                                    <strong>Arthur Ribeiro - Java Development Analyst</strong><br></br>
                                    <strong>GitHub:</strong> arthurkz
                                </IonText>
                            </IonItem>

                            <IonItem>
                                <IonText>
                                    <strong>Pedro Almeida - Fullstack Developer </strong><br></br>
                                    <strong>GitHub:</strong> Peaga001
                                </IonText>
                            </IonItem>

                            <IonItem>
                                <IonText>
                                    <strong>Pedro Mendes - Java Developer</strong><br></br>
                                    <strong>GitHub:</strong> Neur0mncer
                                </IonText>
                            </IonItem>

                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid> 

      </IonContent>
    </IonApp>
  )
}

export default AboutPage