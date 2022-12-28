import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/App.css';
import AuthState from './context/user/AuthState';
import UrlState from './context/url/urlState';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthState>
    <UrlState>
      <App />
    </UrlState>
    </AuthState>
  </React.StrictMode>
);

