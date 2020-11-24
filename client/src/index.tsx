import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './contexts';

// import '../public/root.css';

// const app = document.createElement('div');
// app.id = 'my-extension';
// document.body.appendChild(app);
// app.style.display = 'none';

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === 'click') {
//     toggle();
//   }
// });

// function toggle() {
//   if (app.style.display === 'none') {
//     app.style.display = 'block';
//   } else {
//     app.style.display = 'none';
//   }
// }
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
