import React, { useEffect, useState } from 'react';
import { auth } from "./firebase";
import { Link } from 'react-router-dom';
import './btn.css';
import './header.css';
import Flyer from './images/flyer.jfif';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';




export default function Teste() {
  const [userPhoto, setUserPhoto] = useState(null);
  const [displayName, setDisplayname] = useState(null);
  const [showText, setShowText] = useState(false); // Estado para controlar a exibição da div

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserPhoto(user.photoURL);
        setDisplayname(user.displayName);
        console.log(user);
      } else {
        setUserPhoto(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
  };

  const copyText = () => {
    const textToCopy = "Copie esse texto";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Texto copiado:', textToCopy);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Chave PIX Copiada",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => {
        console.error('Erro ao copiar texto:', err);
        alert('Erro ao copiar texto. Por favor, tente novamente.');
      });
  };

  const toggleText = () => {
    setShowText(!showText); // Alterna entre true e false
  };

  return (
    <>
      {userPhoto && (
        <>
        <div className='mobile'>
         <br></br>
         <br></br>
         </div>
          <div className='header'>
            <div id='user'>
              <img src={userPhoto} alt="Foto de perfil do usuário" id='userfoto' />
              <div>
                <h1>Olá {displayName}</h1>
                <p>Adquira aqui seu ingresso!</p>
              </div>

            </div>
            <button onClick={handleLogout} className='logout-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
              </svg>
            </button>
          </div>

          <br></br> 


          <div id='container-ingresso'>
            <div id='img-btn'>
            <img src={Flyer} alt="flyer" id='flyer' />
            <button onClick={toggleText} id='buy'>Compre Aqui!</button>
            <br></br>
                <br></br>
                <br></br>
            </div>
            
            {showText && (
              
              <div id='container-infos'>
                <h1 id='valor-ingresso'>R$35,00</h1>

                <br></br>
                <p className='p'>Seu Nome:</p>
                <input type="text" placeholder='Nome' />
                <br></br>  
                <p className='p'>Seu número telefone:</p>
              
                <input type="number" placeholder='Telefone' />
                <br></br> 
                
               <p className='p'>Pague nessa chave Pix :)</p>
               <div id='pix'>
              <input type="text" placeholder='43214424866' disabled='true' />
                <button onClick={copyText} id='copiar'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg></button>
              </div>
              <br></br>
              <p className='p'>Seu Comprovante!</p>
              <input type="file" />
              <br></br>  <br></br>
              <div id='btn-end'>        
              <button id='Enviar'>Enviar</button>
           
             </div>

              </div>
              
            )}
               
          </div>
        </>
      )}
      {!userPhoto && <Link to="/sobre" className='login-with-google-btn'>Redirect para Login</Link>}
      
    </>
  );
}
