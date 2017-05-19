import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import App from '../../ui/containers/AppWrap';
import HomePageContainer from '../../ui/containers/HomePage';
import BodyData from '../../ui/containers/BodyData';
import BodyForm from '../../ui/containers/BodyForm';
import NotFound from '../../ui/pages/NotFound.js';

// const authenticate = (nextState, replace) => {
//   if (!Meteor.loggingIn() && !Meteor.userId()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname },
//     });
//   }
// };

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ App } />
        <Route path="home" component={ HomePageContainer } />
        <Route path="body" component={ BodyData } />
        <Route path="body/form" component={ BodyForm } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
