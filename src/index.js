import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';

/* React UI */
import CssBaseline from '@material-ui/core/CssBaseline';

/* css custom */
import './assets/css/App.css'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);