import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app'; // Our custom react component
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();// import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);