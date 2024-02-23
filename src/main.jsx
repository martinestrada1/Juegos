import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/UI/Header'
import ProfileForm from './Components/perfil/ProfileForm'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
  <ProfileForm/>
  </React.StrictMode>,
)
