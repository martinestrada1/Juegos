import React from 'react';
import { Paragraph } from '../globals/Paragraph';
import Google from '../../../public/Google.png';
import './Login.css';
import { GlobalField } from './globalField';

function Login() {
  return (
    <>
      <div className='form-content1'>
        <Paragraph text="Iniciar Sesion" />
        <Paragraph 
          text="¡Bienvenido de nuevo!, Por favor, inicia sesión para acceder a tu cuenta."  
        />
        <GlobalField label="Correo Electrónico" placeholder="Correo Electrónico" type="email" />
        <GlobalField label="Contraseña" placeholder="***********" type="password" />
        <button className="login-button1">Iniciar Sesión</button>
        <Paragraph text="_______________ o _______________" />
        <button className="register-button-google1">
        <img src={Google} alt="Google Logo" className="google-logo" />
        Iniciar Sesión con Google
      </button>

      <Paragraph>
          text = "¿Ya tienes una cuenta?," <a href="#inicio-sesion" className="">Inicia sesión aquí</a>.
        </Paragraph>

        <Paragraph>
          ¿Ya tienes una cuenta?, <a href="#inicio-sesion" className="login-link1">Inicia sesión aquí</a>.
        </Paragraph>

    
      </div>
    </>
  )
}

export default Login;
