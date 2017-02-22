import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

require('./styles/app.scss');
injectTapEventPlugin();


ReactDOM.render(
 <Router history={browserHistory}>
  <Route path="/" component={Main}>
   <Route path="countdown" component={Countdown} />
   <IndexRoute component={Timer}/>
  </Route>
 </Router>,
 document.getElementById("app")
 );
