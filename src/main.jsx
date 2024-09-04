import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {initializeApp} from "firebase/app"



const firebaseConfig = {
  apiKey: "AIzaSyA3qH4uDvBpN64V3KqkEssbYabJVPRqI30",
  authDomain: "ecommercejf-69f5a.firebaseapp.com",
  projectId: "ecommercejf-69f5a",
  storageBucket: "ecommercejf-69f5a.appspot.com",
  messagingSenderId: "525247973665",
  appId: "1:525247973665:web:ddb10f533a4327585cd660",
  measurementId: "G-HTED70SXJ5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
