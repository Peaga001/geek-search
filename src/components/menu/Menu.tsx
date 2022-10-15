import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonToolbar
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, helpBuoySharp, helpCircleOutline, helpCircleSharp, home, homeOutline, homeSharp, logOutOutline, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, settingsOutline, settingsSharp, storefrontOutline, storefrontSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import Themes from '../../theme/Theme'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}



const logoProps = {
  url: '/assets/img/Logo.png',
  alt: 'GeekSearch logo'
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeSharp,
    mdIcon: homeOutline
  },
  {
    title: 'Store',
    url: '/Store',
    iosIcon: storefrontSharp,
    mdIcon: storefrontOutline
  },
  {
    title: 'About',
    url: '/About',
    iosIcon: helpCircleSharp,
    mdIcon: helpCircleOutline
  },
  {
    title: 'My Settings',
    url: '/MySettings',
    iosIcon: settingsSharp,
    mdIcon: settingsOutline
  },
  {
    title: 'Logout',
    url: '/Logout',
    iosIcon: logOutSharp,
    mdIcon: logOutOutline
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color={Themes.headerMenuColor}>
          <IonImg src={logoProps.url}  alt={logoProps.alt}/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList id="inbox-list">

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
