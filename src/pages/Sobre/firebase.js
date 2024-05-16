import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARXRedvZc53dwNgVEJRrcRLHPPfz_hvfc",
    authDomain: "fir-auth-bfcb3.firebaseapp.com",
    projectId: "fir-auth-bfcb3",
    storageBucket: "fir-auth-bfcb3.appspot.com",
    messagingSenderId: "1007668330235",
    appId: "1:1007668330235:web:dca3c786d4f9a20b6c7a5e"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {firebase , auth ,app }