import React from 'react';
import PropTypes from 'prop-types';
import { RouteTransition } from 'react-router-transition';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const App = ({ children }) => (
  <div className="app-wrap">
    <RouteTransition
      pathname={location.pathname}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
    { children }
    </RouteTransition>
    <Alert stack={{ limit: 3 }} />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
