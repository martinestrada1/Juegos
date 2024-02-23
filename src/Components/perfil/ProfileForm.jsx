import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [formState, setFormState] = useState({
    idStudent: '32165461',
    phone: '123 456 7890',
    subjects: '',
    hobbies: 'Películas / Series',
    instagram: '',
    facebook: '',
    twitter: '',
    about: '',
    address: {
      street: 'Calle Cárcamos 123',
      city: 'Arbide',
      state: 'Chiapas',
      zipCode: '12345',
      country: 'México',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      address: { ...prevState.address, [name]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Aquí puedes enviar los datos a tu backend o realizar cualquier otra acción
  };

  return (
    <div className="profile-form-container">
      <h2>Completa tu perfil</h2>
      <p>¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor con la comunidad.</p>
      <form onSubmit={handleSubmit}>
        <h3>Carrera</h3>
        <input type="text" name="carreraStudent" value={formState.carreraStudent} onChange={handleChange} />
        
        <h3>ID Estudiante</h3>
        <input type="text" name="idStudent" value={formState.idStudent} onChange={handleChange} />
        
        <h3>Teléfono</h3>
        <input type="tel" name="phone" value={formState.phone} onChange={handleChange} />
        
        <div className='containerFormulario'>
          <h3>Intereses</h3>
          {/* Código de los intereses */}
        </div>
        
        <h3>Hobbies</h3>
        <input type="text" name="hobbies" value={formState.hobbies} onChange={handleChange} />
        
        <div className='containerFormulario'>
          <h3>Redes Sociales</h3>
          {/* Código de las redes sociales */}
        </div>
        
        <h3>Acerca de mí</h3>
        <textarea name="about" value={formState.about} onChange={handleChange}></textarea>
        
        <h3>Datos de Ubicación</h3>
        <div className="address-container">
          <div className="address-column">
            <label>
              Calle
              <input type="text" name="street" value={formState.address.street} onChange={handleAddressChange} />
            </label>
            <label>
              Colonia
              <input type="text" name="city" value={formState.address.city} onChange={handleAddressChange} />
            </label>
          </div>
          <div className="address-column">
            <label>
              C.P.
              <input type="text" name="zipCode" value={formState.address.zipCode} onChange={handleAddressChange} />
            </label>
            <label>
              Estado
              <input type="text" name="state" value={formState.address.state} onChange={handleAddressChange} />
            </label>
          </div>
          <div className="address-column">
            <label>
              País
              <input type="text" name="country" value={formState.address.country} onChange={handleAddressChange} />
            </label>
          </div>
        </div>

        <div className='container-button'>
          <button type="submit">Guardar cambios</button>
        </div>        
      </form>
    </div>
  );
};

export default ProfileForm;
