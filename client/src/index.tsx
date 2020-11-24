import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
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

ReactDOM.render(<App />, document.getElementById('root'));
