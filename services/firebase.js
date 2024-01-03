import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCpg50oDewzm98lNuDNvIGTsGuOD6LhF-c",
  authDomain: "helpdesk-inforio.firebaseapp.com",
  projectId: "helpdesk-inforio",
  storageBucket: "helpdesk-inforio.appspot.com",
  messagingSenderId: "694309674816",
  appId: "1:694309674816:web:d87f4cce9d7dd41179a4a5"
};

// Verifique se o aplicativo Firebase já está inicializado
const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

export { database };
