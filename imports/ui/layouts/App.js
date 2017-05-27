import React from 'react';
import PropTypes from 'prop-types';
import { RouteTransition } from 'react-router-transition'


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
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
