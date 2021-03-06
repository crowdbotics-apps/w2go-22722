import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp13175210Navigator from '../features/SignUp13175210/navigator';
import Feed4175209Navigator from '../features/Feed4175209/navigator';
import BlankScreen0175207Navigator from '../features/BlankScreen0175207/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp13175210: { screen: SignUp13175210Navigator },
Feed4175209: { screen: Feed4175209Navigator },
BlankScreen0175207: { screen: BlankScreen0175207Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
