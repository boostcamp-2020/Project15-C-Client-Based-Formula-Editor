import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './contexts';
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

function getProductionRootElement() {
  const app = document.createElement('div');
  app.id = 'my-extension';
  document.body.appendChild(app);
  app.style.display = 'none';

  function toggle() {
    if (app.style.display === 'none') {
      app.style.display = 'block';
    } else {
      app.style.display = 'none';
    }
  }

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'click') {
      toggle();
    }
  });
  return app;
}

const app =
  process.env.NODE_ENV === 'development'
    ? document.getElementById('root')
    : getProductionRootElement();

//const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
