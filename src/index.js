import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3TofFmkH_KLe8RU2zmsVvtnZZw61leiA",
  authDomain: "react-e-commerce-fiorellaom.firebaseapp.com",
  projectId: "react-e-commerce-fiorellaom",
  storageBucket: "react-e-commerce-fiorellaom.appspot.com",
  messagingSenderId: "915669878282",
  appId: "1:915669878282:web:fc37d2459b9cad9e7901f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { <App/> } 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

