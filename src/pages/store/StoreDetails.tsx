import { 
    IonApp, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton,
    IonText,
    IonTitle,
    IonToolbar 
} from "@ionic/react"


/* Styles */
import Themes from '../../theme/Theme'


interface DataSessionProps {
    url:string
    description:string
    price:number
  }


const StoreDetails:React.FC<DataSessionProps> = ({url,description,price}) => {
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
            <IonText>Teste</IonText>
        </IonContent>
      </IonApp>
    )
}
  
  export default StoreDetails