import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUpPage';
import LoginPage from './pages/login/LoginPage';
import StorePage from './pages/store/StorePage';
import AboutPage from './pages/about/AboutPage';
import MySettingsPage from './pages/mysettings/MySettingsPage';
import LogoutPage from './pages/logout/LogoutPage';
import StoreDetails from './pages/store/StoreDetails';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/Login"/>
            </Route>

            <Route path="/SignUp" exact={true} component={SignUpPage}>
            </Route>

            <Route path="/Login" exact={true} component={LoginPage}>
            </Route>
            
            <Route path="/Home" exact={true} component={HomePage}>
            </Route>

            <Route path="/Store" exact={true} component={StorePage}>
            </Route>

            <Route path="/Store/details/{v1}" exact={true} component={StoreDetails}>
            </Route>

            <Route path="/About" exact={true} component={AboutPage}>
            </Route>

            <Route path="/MySettings" exact={true} component={MySettingsPage}>
            </Route>

            <Route path="/Logout" exact={true} component={LogoutPage}>
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
