import loadMethodStubs from './configs/method_stubs';
import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

loadMethodStubs();
const context = initContext();
initRoutes(context, actions);
