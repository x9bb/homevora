// src/routes.jsx
import React from 'react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
];

export default routes;
