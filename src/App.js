import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from 'containers/DevTools';

const store = createStore(window.__INITIAL_STATE__);

function historyCallback(location) {
  match({ location, routes }, (error, redirect, routerState) => {
    if (!error && !redirect) {
      prepareData(store, routerState);
    }
  });
}

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);

const App = () => (
  React.createElement(Provider,
    { store },
    React.createElement(Router,
      {
        history: browserHistory,
        routes
      }
    )
  )
);

ReactDOM.render(
  React.createElement(
    DevTools,
    { store }
  ),
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
