import React from 'react';
import './App.css';
import { GlobalField } from './Components/forms/globalField';
import { Paragraph } from './Components/globals/Paragraph';
import Google from '../public/Google.png'

function App() {
  return (
    <>
      <div className='form-content'>
        <Paragraph text="Únete a nuestra comunidad estudiantil" />
        <Paragraph 
          text="Bienvenido a nuestra red social estudiantil. Regístrate ahora para conectarte con compañeros, acceder a recursos educativos y participar en eventos emocionantes"  
        />
        <GlobalField label="Nombre(s)" placeholder="Nombre(s)" type="text" />
        <GlobalField label="Apellido(s)" placeholder="Apellido(s)" type="text" />
        <GlobalField label="Correo Electrónico" placeholder="Correo Electrónico" type="email" />
        <GlobalField label="Contraseña" placeholder="***********" type="password" />
        <GlobalField label="Confirmar Contraseña" placeholder="***********" type="password" />
        <div className="terms-checkbox">
          <GlobalField label="" type="checkbox" />
          <Paragraph text="Al registrarse, aceptas nuestros Términos de Servicio y Política de Privacidad" />
        </div>
        <button className="register-button">Registrarme</button>
        <Paragraph text="_______________ o _______________" />
        <button className="register-button-google">
        <img src={Google} alt="Google Logo" className="google-logo" />
        Registrarme con Google
      </button>

      <Paragraph>
          text = "¿Ya tienes una cuenta?," <a href="#inicio-sesion" className="">Inicia sesión aquí</a>.
        </Paragraph>

        <Paragraph>
          ¿Ya tienes una cuenta?, <a href="#inicio-sesion" className="login-link">Inicia sesión aquí</a>.
        </Paragraph>

    
      </div>
    </>
  )
}

export default App;
