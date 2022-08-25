import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBF-dpvYfSYMITeCsIUw6hGziYewiX9W9M',
  authDomain: 'mooviex-app.firebaseapp.com',
  projectId: 'mooviex-app',
  storageBucket: 'mooviex-app.appspot.com',
  messagingSenderId: '930106544686',
  appId: '1:930106544686:web:61c7864cba5d31d21fc5bf',
  measurementId: 'G-66VLFCHD22',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
