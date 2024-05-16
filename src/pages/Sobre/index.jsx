import React from 'react';
import firebase from "firebase/app";
import { auth } from "./firebase";
import './btn.css';
import './login.css';
import img_login from './images/login.png' 

export default function Sobre() {
  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      
      if (result.user) {
        const { displayName, photoURL } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('O usuário não tem DisplayName ou photoUrl');
        }

        window.location.href = '/teste'; // Redireciona para o componente Teste após o login
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <>
    <div className='container-login'>

      <div>

    <img src={img_login} alt="" srcset="" id='login-img'/>


      </div>
      <div>
        <h1 id='titulo'>REALIZE SEU <span>LOGIN!</span></h1>


 
        <img src={img_login} alt="" srcset="" id='img'/>

  
        <p id='desc'>
        Para garantir seu lugar nesse evento incrível, faça 
        o login agora e adquira
         seu ingresso antes que acabem! 
         Mal podemos esperar para ver você em nossa festa!
        </p>
        <p id='desc'>
        Estamos adotando um novo método de login em parceria com o Google. Esperamos que essa mudança facilite sua experiência de acesso à nossa plataforma.
        </p>
      <div className='div-btn'>
      <button onClick={handleLogin} className='login-with-google-btn'>Login Google</button>
      </div>
      </div>
      </div>
    </>
  );
}
