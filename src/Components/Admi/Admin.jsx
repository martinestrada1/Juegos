import React from 'react';
import '../Admi/Admin.css'

const AdminComponent = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Administra usuarios y contenido de CampusLink</h1>
      </div>
      <div className="admin-section">
        <div className="admin-section-content">
          <h2 className="admin-section-title">Administración de Usuarios</h2>
          <hr className="separator" />
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Administradores</p>
              <p>4 administradores</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Directores</p>
              <p>2 directores</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <hr className="separator" />
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Usuarios reportados</p>
              <p>0 usuarios reportados</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Bloquear Usuarios</p>
              <p>2 Usuarios bloqueados</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Usuarios Eliminados</p>
              <p>2 Usuarios eliminados</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
        </div>
        

        <div className="admin-section-content">
          <h2 className="admin-section-title">Administración de Contenido</h2>
          <hr className="separator" />
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Publicaciones reportadas</p>
              <p>4 Publicaciones</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Publicaciones bloqueadas</p>
              <p>4 Publicaciones</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Publicaciones eliminadas</p>
              <p>4 Publicacione</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <hr className="separator" />
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Eventos reportados</p>
              <p>2 eventos</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Eventos bloqueados</p>
              <p>2 eventos</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
          <div className="admin-subsection">
            <div className="admin-text">
              <p>Eventos cancelados</p>
              <p>2 eventos</p>
            </div>
            <button className="edit-button">Editar</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminComponent;
