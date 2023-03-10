import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ConvexProvider, ConvexReactClient } from "convex/react";
import ChatbotPage from './pages/ChatbotPage';
const address = process.env.REACT_APP_CONVEX_URL;
const convex = new ConvexReactClient(address);

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.overflow = "hidden"
root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <ChatbotPage />
    </ConvexProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
